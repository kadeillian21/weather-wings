import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

const InstabilityFundamentalsVisual = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Canvas dimensions
  const width = 800;
  const height = 600;

  // Pressure and temperature ranges
  const pMin = 100; // mb - top of chart
  const pMax = 1050; // mb - bottom of chart
  const tMin = -50; // °C - left edge
  const tMax = 50; // °C - right edge

  // Sample data for temperature and dewpoint profiles
  const tempProfile = [
    { p: 1000, t: 28 }, { p: 950, t: 24 }, { p: 900, t: 18 }, { p: 850, t: 14 },
    { p: 800, t: 10 }, { p: 750, t: 8 }, { p: 700, t: 4 }, { p: 650, t: 0 },
    { p: 600, t: -4 }, { p: 550, t: -8 }, { p: 500, t: -14 }, { p: 450, t: -19 },
    { p: 400, t: -25 }, { p: 350, t: -31 }, { p: 300, t: -38 }, { p: 250, t: -46 },
    { p: 200, t: -54 }, { p: 150, t: -59 }, { p: 100, t: -61 }
  ];

  const dewProfile = [
    { p: 1000, t: 22 }, { p: 950, t: 18 }, { p: 900, t: 15 }, { p: 850, t: 8 },
    { p: 800, t: 4 }, { p: 750, t: 0 }, { p: 700, t: -6 }, { p: 650, t: -11 },
    { p: 600, t: -18 }, { p: 550, t: -24 }, { p: 500, t: -32 }, { p: 450, t: -37 },
    { p: 400, t: -43 }, { p: 350, t: -49 }, { p: 300, t: -55 }, { p: 250, t: -63 },
    { p: 200, t: -69 }, { p: 150, t: -74 }, { p: 100, t: -78 }
  ];

  // Convert pressure to y-coordinate
  const pressureToY = (p) => {
    return height * (Math.log(p) - Math.log(pMin)) / (Math.log(pMax) - Math.log(pMin));
  };

  // Convert temperature to x-coordinate with skew
  const tempToX = (t, p) => {
    const skewFactor = 30; // Controls the amount of skew
    const skew = (height - pressureToY(p)) / skewFactor;
    return width / 2 + (t - (tMin + tMax) / 2) * width / (tMax - tMin) + skew;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    // Set up dark background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    // Draw pressure lines
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1;

    const pressureLevels = [100, 200, 300, 400, 500, 700, 850, 1000];
    pressureLevels.forEach(p => {
      const y = pressureToY(p);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();

      // Label pressure levels
      ctx.fillStyle = '#ff6666';
      ctx.font = '14px Arial';
      ctx.fillText(`${p} mb`, 10, y + 15);

      // Add altitude labels for key levels
      if ([1000, 850, 700, 500, 300, 200, 100].includes(p)) {
        let altitude;
        switch (p) {
          case 1000: altitude = "0 km"; break;
          case 850: altitude = "1.5 km"; break;
          case 700: altitude = "3 km"; break;
          case 500: altitude = "5.5 km"; break;
          case 300: altitude = "9 km"; break;
          case 200: altitude = "12 km"; break;
          case 100: altitude = "16 km"; break;
          default: altitude = "";
        }
        ctx.fillStyle = '#ff6666';
        ctx.fillText(altitude, 50, y + 15);
      }
    });

    // Draw temperature lines
    for (let t = tMin; t <= tMax; t += 10) {
      ctx.beginPath();
      ctx.strokeStyle = '#555';

      // Draw skewed temperature lines
      for (let p = pMin; p <= pMax; p += 10) {
        const x = tempToX(t, p);
        const y = pressureToY(p);

        if (p === pMin) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Label temperature lines at the bottom
      const x = tempToX(t, pMax);
      ctx.fillStyle = '#fff';
      ctx.font = '12px Arial';
      ctx.fillText(`${t}°C`, x - 10, height - 5);
    }

    // Draw dry adiabats
    for (let theta = -40; theta <= 160; theta += 20) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)';

      for (let p = pMin; p <= pMax; p += 10) {
        // Convert potential temperature to actual temperature at pressure p
        const t = theta * Math.pow(1000 / p, 0.286) - 273.15;
        const x = tempToX(t, p);
        const y = pressureToY(p);

        if (p === pMin) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Draw moist adiabats
    for (let thetaW = -40; thetaW <= 40; thetaW += 10) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';

      // Simplified approximation of moist adiabats
      for (let p = pMin; p <= pMax; p += 10) {
        // This is a very simplified approximation
        let t;
        if (p > 400) {
          t = thetaW + (40 - thetaW) * (Math.log(1000) - Math.log(p)) / (Math.log(1000) - Math.log(400));
        } else {
          t = thetaW * Math.pow(400 / p, 0.2);
        }

        const x = tempToX(t, p);
        const y = pressureToY(p);

        if (p === pMin) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    // Draw mixing ratio lines
    for (let w = 0.5; w <= 20; w += w < 4 ? 0.5 : 4) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';

      for (let p = 300; p <= pMax; p += 10) {
        // Approximate temperature for a given mixing ratio at pressure p
        const e = (w * p) / (622 + w);  // vapor pressure
        const t = (243.5 * Math.log(e / 6.112)) / (17.67 - Math.log(e / 6.112));  // Bolton's formula

        if (t > tMin && t < tMax) {
          const x = tempToX(t, p);
          const y = pressureToY(p);

          if (p === 300) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      }
      ctx.stroke();
    }

    // Draw temperature profile (red line)
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    tempProfile.forEach((point, i) => {
      const x = tempToX(point.t, point.p);
      const y = pressureToY(point.p);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw dewpoint profile (green line)
    ctx.beginPath();
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 3;
    dewProfile.forEach((point, i) => {
      const x = tempToX(point.t, point.p);
      const y = pressureToY(point.p);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Mark LCL (Lifting Condensation Level)
    // Find where temp and dewpoint profiles are closest (simplified)
    let minDiff = Infinity;
    let lclPressure = null;

    for (let i = 0; i < tempProfile.length; i++) {
      const diff = Math.abs(tempProfile[i].t - dewProfile[i].t);
      if (diff < minDiff) {
        minDiff = diff;
        lclPressure = tempProfile[i].p;
      }
    }

    if (lclPressure) {
      const lclY = pressureToY(lclPressure);

      ctx.beginPath();
      ctx.strokeStyle = 'yellow';
      ctx.setLineDash([5, 5]);
      ctx.moveTo(0, lclY);
      ctx.lineTo(width, lclY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Label LCL
      ctx.fillStyle = 'yellow';
      ctx.font = '16px Arial';
      ctx.fillText('LCL', width - 50, lclY + 20);
    }

    // Add title
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('ECMWF 2025-03-08 12z, F006, VALID: Sat 2025-03-08 18z AT: 23.8 N, 86.8 W', 10, 20);

    // Add legend
    ctx.font = '14px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Temperature', 20, 40);
    ctx.fillStyle = 'lime';
    ctx.fillText('Dewpoint', 20, 60);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
    ctx.fillText('Dry Adiabats', 20, 80);
    ctx.fillStyle = 'rgba(0, 255, 0, 0.7)';
    ctx.fillText('Moist Adiabats', 20, 100);
    ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
    ctx.fillText('Mixing Ratio', 20, 120);

    // Draw wind barbs (simplified)
    const windBarbs = [
      { p: 1000, dir: 180, speed: 5 },
      { p: 850, dir: 200, speed: 10 },
      { p: 700, dir: 220, speed: 20 },
      { p: 500, dir: 240, speed: 35 },
      { p: 300, dir: 260, speed: 55 },
      { p: 200, dir: 270, speed: 70 },
      { p: 100, dir: 280, speed: 45 }
    ];

    windBarbs.forEach(barb => {
      const y = pressureToY(barb.p);
      drawWindBarb(ctx, width - 40, y, barb.dir, barb.speed);
    });

    setIsLoaded(true);
  }, []);

  const drawWindBarb = (ctx, x, y, direction, speed) => {
    const length = 20;
    const angle = (direction - 90) * (Math.PI / 180);

    // Draw shaft
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle));
    ctx.stroke();

    // Draw barbs based on speed
    let remainingSpeed = speed;
    let offset = 0;

    while (remainingSpeed > 0) {
      if (remainingSpeed >= 50) {
        // Draw pennant (triangle)
        const tipX = x + (length - offset) * Math.cos(angle);
        const tipY = y + (length - offset) * Math.sin(angle);
        const perpAngle = angle + Math.PI / 2;
        const flagLength = 10;

        ctx.beginPath();
        ctx.moveTo(tipX, tipY);
        ctx.lineTo(
          tipX - flagLength * Math.cos(perpAngle) - 5 * Math.cos(angle),
          tipY - flagLength * Math.sin(perpAngle) - 5 * Math.sin(angle)
        );
        ctx.lineTo(
          tipX - 5 * Math.cos(angle),
          tipY - 5 * Math.sin(angle)
        );
        ctx.closePath();
        ctx.fillStyle = '#fff';
        ctx.fill();

        remainingSpeed -= 50;
        offset += 5;
      } else if (remainingSpeed >= 10) {
        // Draw full barb
        const barbX = x + (length - offset) * Math.cos(angle);
        const barbY = y + (length - offset) * Math.sin(angle);
        const perpAngle = angle + Math.PI / 2;
        const barbLength = 8;

        ctx.beginPath();
        ctx.moveTo(barbX, barbY);
        ctx.lineTo(
          barbX - barbLength * Math.cos(perpAngle),
          barbY - barbLength * Math.sin(perpAngle)
        );
        ctx.stroke();

        remainingSpeed -= 10;
        offset += 3;
      } else if (remainingSpeed >= 5) {
        // Draw half barb
        const barbX = x + (length - offset) * Math.cos(angle);
        const barbY = y + (length - offset) * Math.sin(angle);
        const perpAngle = angle + Math.PI / 2;
        const barbLength = 4;

        ctx.beginPath();
        ctx.moveTo(barbX, barbY);
        ctx.lineTo(
          barbX - barbLength * Math.cos(perpAngle),
          barbY - barbLength * Math.sin(perpAngle)
        );
        ctx.stroke();

        remainingSpeed -= 5;
        offset += 3;
      } else {
        break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold mb-2">Skew-T Diagram Visualizer</h1>
      <div className="border border-gray-700 rounded">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="bg-black"
        />
      </div>
      <div className="mt-4 p-4 bg-gray-800 rounded w-full max-w-4xl">
        <h2 className="text-lg font-bold mb-2">About This Skew-T Diagram</h2>
        <p className="mb-2">
          This Skew-T diagram shows temperature and humidity profiles in the atmosphere, along with
          important meteorological parameters like dry adiabats, moist adiabats, and mixing ratio lines.
        </p>
        <p className="mb-2">
          <span className="font-bold text-red-500">Red line:</span> Temperature profile<br />
          <span className="font-bold text-green-500">Green line:</span> Dewpoint profile<br />
          <span className="font-bold text-yellow-500">Yellow line:</span> Lifting Condensation Level (LCL)
        </p>
        <p>
          The diagram also shows wind barbs on the right side, indicating wind direction and speed at different pressure levels.
        </p>
      </div>
    </div>
  );
};

export default InstabilityFundamentalsVisual;