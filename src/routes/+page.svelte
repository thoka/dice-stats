<script>
  import { afterNavigate } from "$app/navigation";
	import W2 from "$lib/W2.svelte";

  let grime = 
    { name: "Grime", dices: [
      { name: "Rot",  sides: "444449", color: "red" },
      { name: "Gelb", sides: "333388", color: "yellow" },
      { name: "Magenta", sides: "116666", color: "magenta" },
      { name: "Blau", sides: "222777", color: "blue" },
      { name: "Olive", sides: "055555", color: "green" }
    ]}
  
  // calc all possible pairs of a set of dices

  let all_combinations = (dices) => {
    let result = []
    for (let i = 0; i < dices.length; i++) {
      for (let j = i + 1; j < dices.length; j++) {
        result.push([dices[i], dices[j]])
      }
    }
    return result
  }

  let set = grime

  
</script>


<main>
  <h1>Intransitive Würfel ({set.name})</h1>  

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