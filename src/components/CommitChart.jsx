import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import flatMap from 'core-js/features/array/flat-map';

const Wrapper = styled.div`
  .line {
    fill: none;
    stroke: ${({ theme }) => theme.primary};
    stroke-width: 4;
  }
`;

function CommitChart({ data }) {
  const containerRef = React.useRef(null);

  const flatData = React.useMemo(
    () =>
      data &&
      flatMap(
        data.reduce((a, b) => [...a, b.contributionDays], []),
        d => d
      ),
    [data]
  );

  React.useEffect(() => {
    if (!flatData) return;

    function init() {
      const width = 270;
      const height = 40;
      const margin = 10;
      const maxValue = height / 2;

      const xScale = d3
        .scaleTime()
        .domain(d3.extent(flatData, d => new Date(d.date)))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(flatData, d =>
            d.contributionCount >= maxValue ? maxValue : d.contributionCount
          ),
        ])
        .range([height, 0]);

      const line = d3
        .line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y));

      const dataset = flatData.map(d => ({
        x: new Date(d.date),
        y: d.contributionCount >= maxValue ? maxValue : d.contributionCount,
      }));

      const svg = d3
        .select(containerRef.current)
        .append('svg')
        .attr('width', width + margin * 2)
        .attr('height', height + margin * 2)
        .append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

      svg
        .append('path')
        .datum(dataset)
        .attr('class', 'line')
        .attr('d', line);
    }

    // clear previous d3 svg element
    d3.select(containerRef.current)
      .selectAll('svg')
      .remove();

    init();
  }, [flatData]);

  return (
    <div>
      <Wrapper ref={containerRef} />
    </div>
  );
}

export default CommitChart;
