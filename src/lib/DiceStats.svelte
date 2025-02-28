<script>
  export let set = {};

  import W2 from "$lib/W2.svelte";
	import Simulation from "./Simulation.svelte";

  let all_combinations = (dice) => {
    let result = []
    for (let i = 0; i < dice.length; i++) {
      for (let j = i + 1; j < dice.length; j++) {
        result.push([dice[i], dice[j]])
      }
    }
    return result
  }

</script>

<main>
  <h2>Set: {set.name}</h2>  

  <div class="grid">
    {#each all_combinations(set.dice,) as [dieA, dieB]}
      <div class="grid2">
        <W2 A={dieA} B={dieB}></W2> <Simulation A={dieA} B={dieB} width=500></Simulation>
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