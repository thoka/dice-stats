<script>
  export let dices = {};


  import W2 from "$lib/W2.svelte";
	import Simulation from "./Simulation.svelte";



  let all_combinations = (dices) => {
    let result = []
    for (let i = 0; i < dices.length; i++) {
      for (let j = i + 1; j < dices.length; j++) {
        result.push([dices[i], dices[j]])
      }
    }
    return result
  }

  let set = dices
  
</script>

<main>
  <h2>Set: {set.name}</h2>  

  <div class="grid">
    {#each all_combinations(set.dices,) as [diceA, diceB]}
      <div class="grid2">
        <W2 A={diceA} B={diceB}></W2> <Simulation A={diceA} B={diceB} width=500></Simulation>
      </div>
    {/each}
  </div>

</main>

<style>
  h2 { display: none}

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
    column-gap: 25px;
  }

  main {
    text-align: center;
  }

  .grid2 {
    display: grid;
    grid-template-columns: 150px 500px;
  }

</style>