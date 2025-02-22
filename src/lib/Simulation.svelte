<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    let data = [];
    
    let count = 0;

    export let A= { name: "Rot",  sides: "444449", color: "red" }
    export let B= { name: "Gelb", sides: "333388", color: "yellow" }

    let counts = [0,0,0]
    let Af = A.sides.split("");
    let Bf = B.sides.split("");

    for (let i = 0; i < Af.length; i++) {
        let row = []
        for (let j = 0; j < Bf.length; j++) {
            if (Af[i] > Bf[j]) {
                counts[2]++
            } else if (Af[i] < Bf[j] ) {
                counts[0]++
            } else {
                counts[1]++
            }
        }
    }

    let sum = (counts[0] + counts[1] + counts[2])
    let percentages = counts.map(c => Math.round(c / sum * 1000)/10)
    let summed = 0;
    let summed_percentages = []
    for (let i = 0; i < percentages.length; i++) {
        summed += percentages[i]
        summed_percentages.push(summed)
    }

    let m = summed_percentages[1]
    
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

    let last_draw = 0;
    function updateData() {
        if (data.length > 50000) {
            data = [];
            count = 0;
            counters = [0,0,0]
        }
        let n = 1;

        if (count > 100) n = 5;
        if (count > 1000) n = 10;
        if (count > 2000) n = 20;
        if (count > 4000) n = 40;
        if (count > 8000) n = 80;
        if (count > 16000) n = 160;

        for (let i = 0; i < n; i++) {
            data.push(generateDataPoint())
        }

        setTimeout(updateData, 20); // Verzögerung von 1 Sekunde
        if (count < 500 || last_draw + (10*n) < count) {
            last_draw = count;
            drawChart();
        }
    }

    export let width = 600;
    export let height = 300;
  
    let svg;

    let drawing = 0;

    let drawChart = () => {
        if (drawing) return;
        drawing++;

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
            .call(d3.axisBottom(x).ticks(5));

        g.append("g").call(d3.axisLeft(y));

        if (0)
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 3)
            .attr("d", line);

  
        let points = [ ["M",x(0),y(0)] ]
        
        for (let i = 0; i < data.length; i++) {
            points.push( ["L",x(data[i][0]-1), y(data[i][1])] )
            points.push( ["L",x(data[i][0]), y(data[i][1])] )
        }

        points = points.concat ( [ [ "L", points[points.length-1][1] , y(0) ]]  )

        points = points.map( (d) => `${d[0]}${d[1].toFixed(2)} ${d[2].toFixed(2)}`).join(' ') + " Z" 


        g
            .append("path")
            .attr("d", points )
            .attr("fill", B.color) 


        points = [ ["M",x(0),y(100)] ]
        
        for (let i = 0; i < data.length; i++) {
            points.push( ["L",x(data[i][0]-1), y(data[i][1])] )
            points.push( ["L",x(data[i][0]), y(data[i][1])] )
        }

        points = points.concat ( [ [ "L", points[points.length-1][1] , y(100) ]]  )

        points = points.map( (d) => `${d[0]}${d[1].toFixed(2)} ${d[2].toFixed(2)}`).join(' ') + " Z" 

        g
            .append("path")
            .attr("d", points )
            .attr("fill", A.color) 


        if (1) {
 
            const expected = d3.line()([[x(1),y(m)], [x(xmax), y(m)]])

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
  