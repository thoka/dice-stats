<script>
    import Matrix from "./lib/Matrix.svelte";
  
    let testData = [
      ["#ff0000", "#00ff00", "#0000ff"],
      ["#ffff00", "#ff00ff", "#00ffff"],
      ["#ffffff", "#cccccc", "#999999"]
    ];
    let testRowLabels = ["Row 1", "Row 2", "Row 3"];
    let testColLabels = ["Col 1", "Col 2", "Col 3"];
    let testRowHeights = ["30px", "40px", "50px"];
    let testColWidths = ["50px", "60px", "70px"];
</script>
  
<main>
    <h1>Farbenmatrix</h1>
    <Matrix
      data={testData}
      rowLabels={testRowLabels}
      colLabels={testColLabels}
      rowHeights={testRowHeights}
      colWidths={testColWidths}
    />
</main>
  
<style>
    main {
      text-align: center;
      padding: 20px;
    }
</style>
  