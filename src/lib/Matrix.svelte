<script>
    export let data = [[]]; // 2D-Array mit Farben
    export let rowLabels = []; // Zeilenbeschriftungen
    export let colLabels = []; // Spaltenbeschriftungen
    export let rowHeights = []; // Höhen der Zeilen
    export let colWidths = []; // Breiten der Spalten
  </script>
  
  <style>
    .matrix-container {
      display: grid;
      grid-template-columns: auto repeat(var(--cols), min-content);
      grid-template-rows: auto repeat(var(--rows), min-content);
      gap: 2px;
      align-items: center;
      justify-content: center;
    }
    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      font-size: 14px;
    }
    .label {
      font-weight: bold;
      text-align: center;
    }
  </style>
  
  <div
    class="matrix-container"
    style="--cols: {data[0].length}; --rows: {data.length};"
  >
    <div class="label"></div>
    {#each colLabels as label, i}
      <div class="label" style="width: {colWidths[i] || 'auto'}">{label}</div>
    {/each}
  
    {#each data as row, i}
      <div class="label" style="height: {rowHeights[i] || 'auto'}">{rowLabels[i] || ''}</div>
      {#each row as cell, j}
        <div
          class="cell"
          style="background-color: {cell}; width: {colWidths[j] || 'auto'}; height: {rowHeights[i] || 'auto'}"
        ></div>
      {/each}
    {/each}
  </div>
  

  