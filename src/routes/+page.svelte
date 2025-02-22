<script>
  import { afterNavigate } from "$app/navigation";
	import DiceStats from "$lib/DiceStats.svelte";

  let grime = 
    { name: "Grime", dices: [
      { name: "Rot",  sides: "444449", color: "red" },
      { name: "Gelb", sides: "333388", color: "yellow" },
      { name: "Magenta", sides: "116666", color: "magenta" },
      { name: "Blau", sides: "222777", color: "blue" },
      { name: "Olive", sides: "055555", color: "green" }
    ]}

    let grime3 = 
    { name: "Grime3", dices: [
      { name: "Rot",   sides: "333336", color: "red" },
      { name: "Blau",  sides: "222555", color: "blue" },
      { name: "Olive", sides: "144444", color: "green" },
    ]}

    let efron = 
    { name: "Efron", dices: [
      { name: "Blau",    sides: "333333", color: "blue" },
      { name: "Magenta", sides: "222266", color: "magenta" },
      { name: "Olive",   sides: "111555", color: "green" },
      { name: "Red",     sides: "004444", color: "red" },
    ]}

    let grime35 = 
    { name: "Grime3+Grime5", dices: [
      { name: "3Rot",   sides: "333336", color: "#f77" },
      { name: "3Blau",  sides: "222555", color: "#77f" },
      { name: "3Olive", sides: "144444", color: "lightgreen" },
      { name: "Rot",  sides: "444449", color: "red" },
      { name: "Gelb", sides: "333388", color: "yellow" },
      { name: "Magenta", sides: "116666", color: "magenta" },
      { name: "Blau", sides: "222777", color: "blue" },
      { name: "Olive", sides: "055555", color: "green" }
    ]}
  
</script>

<main>
  <h1>Hier treten die Grimeschen intransitiven Würfel gegeneinander an ...</h1>
  <DiceStats dices={grime}></DiceStats>
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
