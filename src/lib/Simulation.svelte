<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    function generateRandomData(numPoints) {
        const data = [];
        for (let i = 0; i < numPoints; i++) {
            data.push([i, Math.floor(Math.random() * 101)]);
        }
        return data;
    }

    let data = [];
    
    let count = 0;

    export let A= { name: "Rot",  sides: "444449", color: "red" }
    export let B= { name: "Gelb", sides: "333388", color: "yellow" }

    function choose(from) {
        let sides = from.sides;
        let side = sides[Math.floor(Math.random() * sides.length)];
        return side;
    }   

    function roll() {
        let a = choose(A);
        let b = choose(B);
        return a < b ? 1 : a > b ? 2 : 0;
    }

    let counters = [0,0,0]
    function generateDataPoint() {
       let r = roll()
       counters[r]++

       return  [++count, counters[1]*100/count] ;
    }

    function updateData() {
        if (data.length > 2000) {
            data = [];
            count = 0;
            counters = [0,0,0]
        }

        data.push(generateDataPoint());
        // if (data.length > 100) data.shift(); // Begrenzung der Anzahl der Punkte
        setTimeout(updateData, 20); // Verzögerung von 1 Sekunde
        if (count < 100 || count % 20 == 0)
            drawChart();
    }

    export let width = 600;
    export let height = 300;
  
    let svg;

    let drawing = 0;

    let drawChart = () => {
        if (drawing) return;
        drawing++;
        if (data.length === 0) return;
  
        const margin = { top: 20, right: 30, bottom: 30, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        let xmax = d3.max(data, (d) => d[0])
        xmax = Math.max(xmax, 100)

        const x = d3
            .scaleLinear()
            .domain([1,xmax])
            .range([0, innerWidth]);

        const y = d3
            .scaleLinear()
            .domain([0, 100])
            .range([innerHeight, 0]);

        const line = d3
            .line()
            .x((d) => x(d[0]))
            .y((d) => y(d[1]))
            .curve(d3.curveMonotoneX);

        const svgElement = d3.select(svg);
        svgElement.selectAll("*").remove();

        const g = svgElement
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        g.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(d3.axisBottom(x));

        g.append("g").call(d3.axisLeft(y));

        if (0)
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 3)
            .attr("d", line);

         let bar_enter =    
         g.selectAll("mybar")
            .data(data)
            .enter()
    
        bar_enter
            .append("rect")
            .attr("x", (d) => x(d[0]) )
            .attr("y", (d) => y(d[1]) ) 
            .attr("width", x(1.5)-x(0) )
            .attr("height", (d) => Math.abs(y(d[1])-y(0)) )
            .attr("fill", A.color) 
        bar_enter
            .append("rect")
            .attr("x", (d) => x(d[0]) )
            .attr("y", (d) => y(100) ) 
            .attr("width", x(1.5)-x(0) )
            .attr("height", (d) => Math.abs(y(100)-y(d[1]) ) )
            .attr("fill", B.color)


        if (0) {
            const m = 25;    
            const expected = d3.line()([[x(1),y(m)], [xmax, y(m)]])

            g.append("path")
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("d", expected);    

        }
        drawing--;
    };
  
    onMount(() => {
        // svg = d3.select("svg");
        updateData();

    });
  </script>
  
  <!-- <h1>{A.name} gegen {B.name}</h1> -->
  <svg bind:this={svg}></svg>
  