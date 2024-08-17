import React from "react";
import { metricOptionProps } from "@/types/Dash/PlayerDash";
import LinearBorder from "@/components/LinearBorder";

const MetricOption: React.FC<metricOptionProps> = ({
  metricName,
  metric,
  className,
  Img,
  Link,
}) => {
  return (
    <LinearBorder className={className}>
      <div
        className={`item border-2 flex flex-col items-center gap-2 py-2 rounded-md z-10 ${className}`}
      >
        {Img ? (
          <a className="z-10" href={Link} target="blank">
            <img
              src={Img}
              alt={`${metricName ? metricName : "metric"} image`}
              className="metric-image z-10 h-5"
            />
          </a>
        ) : (
          <>
            {metricName && (
              <>
                <p className="text-sm font-semibold z-10">
                  {metricName.charAt(0).toUpperCase() +
                    metricName.slice(1).toLowerCase()}
                </p>
                <p className="text-sm z-10 font-bold text-primary-gradient_yellow">
                  {metric}
                </p>
              </>
            )}
          </>
        )}
      </div>
    </LinearBorder>
  );
};

export default MetricOption;
