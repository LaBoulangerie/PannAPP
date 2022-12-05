<script>
  // @ts-nocheck

  import Fa from "svelte-fa";
  import { faSearch } from "@fortawesome/free-solid-svg-icons/index.js";
  import Display from "./lib/Display.svelte";
  let result;

  /* The function starts when the validation icon is clicked. 
It allows you to make requests to have access to the API of "La boulangerie". 
In this way, we search if the word search is accessible in one of the different requests.
Depending on the type of the request, the data is stored in an array and sent to the second component. 
This one allows to have the different information appearing according to the requests*/

  function Start() {
    result = undefined;
    request((array) => {
      let req = new XMLHttpRequest();
      req.open("GET", array[1] + "/" + array[0]);
      req.send();
      req.onload = () => {
        result = [JSON.parse(req.response), array[1]];
        return result;
      };
    });
  }

  function request(callback) {
    let i = 0;
    let input_value = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value = "";
    input_value = input_value.charAt(0).toUpperCase() + input_value.slice(1);
    const tab = ["town", "player", "nation"];
    while (i < 3) {
      let req = new XMLHttpRequest();
      req.open("GET", "http://api.laboulangerie.net/" + tab[i]);
      req.send();
      req.onload = () => {
        let result = JSON.parse(req.response);
        for (let x = 0; x < result.length; ) {
          if (result[x].name === input_value) {
            const uuid = result[x].uuid;
            callback([uuid, req.responseURL]);
          }

          x++;
        }
      };
      i++;
    }
  }
</script>

<div class="controller">
  <input type="search" placeholder="Chercher..." id="inputValue" />
  <button
    style="background:#4e598c;border:none;border-radius:5px"
    on:click={Start}
  >
    <Fa
      icon={faSearch}
      style="margin-right:10px;margin-top:1px; width:30px;height:20px"
    /></button
  >
</div>
{#if result !== undefined}
  <Display {result} />
{/if}

<style>
</style>
