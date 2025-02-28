<script>
  import { afterNavigate } from "$app/navigation";
	import DiceStats from "$lib/DiceStats.svelte";

  let grime = 
    { name: "Grime", dice: [
      { name: "Rot",  sides: "444449", color: "red" },
      { name: "Gelb", sides: "333388", color: "yellow" },
      { name: "Magenta", sides: "116666", color: "magenta" },
      { name: "Blau", sides: "222777", color: "blue" },
      { name: "Olive", sides: "055555", color: "green" }
    ]}

    let grime3 = 
    { name: "Grime3", dice: [
      { name: "Rot",   sides: "333336", color: "red" },
      { name: "Blau",  sides: "222555", color: "blue" },
      { name: "Olive", sides: "144444", color: "green" },
    ]}

    let efron = 
    { name: "Efron", dice: [
      { name: "Blau",    sides: "333333", color: "blue" },
      { name: "Magenta", sides: "222266", color: "magenta" },
      { name: "Olive",   sides: "111555", color: "green" },
      { name: "Red",     sides: "004444", color: "red" },
    ]}

    let grime35 = 
    { name: "Grime3+Grime5", dice: [
      { name: "3Rot",   sides: "333336", color: "#f77" },
      { name: "3Blau",  sides: "222555", color: "#77f" },
      { name: "3Olive", sides: "144444", color: "lightgreen" },
      { name: "Rot",  sides: "444449", color: "red" },
      { name: "Gelb", sides: "333388", color: "yellow" },
      { name: "Magenta", sides: "116666", color: "magenta" },
      { name: "Blau", sides: "222777", color: "blue" },
      { name: "Olive", sides: "055555", color: "green" }
    ]}
  
    let set = efron;

</script>

<main>
  <h1>Hier treten die {set.name}'schen intransitiven Würfel gegeneinander an ...</h1>
  <DiceStats set={set}></DiceStats>
</main>

<style>
  main {
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin: 0;
    padding: 0;
  }
  
</style>
