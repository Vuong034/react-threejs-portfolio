import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
// UsOutlined.json https://github.com/deldersveld/topojson/blob/master/countries/united-states/us-albers.json

const Map = () => {
  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{
        scale: 1000,
        center: [0, 45],
      }}
    >
      <ZoomableGroup>
        <Geographies
          geography="/UsOutlined.json"
          stroke="#FFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="grey"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        <Annotation
          subject={[-93, 45]}
          dx={-30}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 3,
            strokeLinecap: "round",
          }}
        >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="#02e6e9"
          >
            {"Based near Minneapolis, MN"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;