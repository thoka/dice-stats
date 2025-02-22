<script>
    export let A = {};
    export let B = {};

    import Matrix from "$lib/Matrix.svelte";

    let Af = A.sides.split("");
    let Bf = B.sides.split("");
  
    let rowLabels = []
    let rowHeights = []
    let colWidths = []
    let colLabels = []
    let matrixColors = []
    let counts = [0,0,0]
    
    for (let i = 0; i < Af.length; i++) {
      let row = []
      rowLabels.push(Af[i])
      rowHeights.push("30px")
      colLabels.push(Bf[i])
      colWidths.push("30px")
  
      for (let j = 0; j < Bf.length; j++) {
          if (Af[i] > Bf[j]) {
              row.push(A.color);
              counts[0]++
          } else if (Af[i] < Bf[j] ) {
              row.push(B.color);
              counts[2]++
          } else {
              row.push("white");
              counts[1]++
          }
      }
      matrixColors.push(row)
    }
      
    let sum = counts[0] + counts[1] + counts[2]
    let percentages = counts.map(c => Math.round(c / sum * 1000)/10)

  </script>

<main>
    <Matrix
        data={matrixColors}
        rowLabels={rowLabels}
        colLabels={colLabels}
        rowHeights={rowHeights}
        colWidths={colWidths}
    />
    <bars style="width:100%; display:flex;">	
        {#each counts as count, i}
            <bar style="background:{i == 0 ? A.color : i == 1 ? "white" : B.color}; width:{percentages[i]}%;">
                {#if (count>0)}<b>{count}</b><br>({percentages[i]}%){/if}
            </bar>
        {/each}
    </bars>
</main>

<style>
  bars {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  bar {
    align-items: center;
    color: black;
    padding: 5px;
  }
</style>

