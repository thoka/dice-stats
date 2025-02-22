<script>
  export let dices = {};


  import W2 from "$lib/W2.svelte";



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
      <W2 A={diceA} B={diceB}></W2>
    {/each}
  </div>

</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  main {
    text-align: center;
    padding: 20px;
  }

</style>