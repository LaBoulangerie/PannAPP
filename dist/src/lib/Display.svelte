<script>
  // @ts-nocheck

  /* */

  /* FontAwesome import */
  import Fa from "svelte-fa";
  import { faHouse, faFlag } from "@fortawesome/free-solid-svg-icons/index.js";
  import Tabular from "tabular-svelte/src/Tabular.svelte";
  import { loop_guard } from "svelte/internal";
  import App from "../App.svelte";

  /* we get the array of containing the request and the information of the api,and some other informations*/

  export let result = [];
  let city_type;
  let type;
  type = JSON.stringify(result[1]).slice(30, -1);
  /*api call for the head and body of the players*/
  const head = "https://visage.surgeplay.com/face/";
  const body = "https://visage.surgeplay.com/full/";
  /* Basic function to retrieve the type of the city*/
  function City_name(type) {
    city_type = result[0].formattedName;
    city_type = city_type.replace(result[0].name, "");
    return city_type;
  }

  /* Function which allows to make the bridge between the various requests, it recovers the type 
  of request which the button sends to him and its uuid and allows to make another request */
  function Change_Request(uuid, request_type) {
    let new_type;
    if (request_type == "player") {
      new_type = request_type;
      request_type = request_type + "/" + uuid;
      /*  Creation of a new request according to its type */
      new_request(request_type, (request) => {
        result = request;
        type = new_type;
        return result;
      });
    }
    if (request_type == "town") {
      new_type = request_type;
      request_type = request_type + "/" + uuid;

      new_request(request_type, (request) => {
        result = request;
        type = new_type;
        return result & city_type;
      });
    }
    if (request_type == "nation") {
      new_type = request_type;
      request_type = request_type + "/" + uuid;

      new_request(request_type, (request) => {
        result = request;
        type = new_type;
        return result;
      });
    }
  }
  function new_request(type, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "http://api.laboulangerie.net/" + type);
    req.send();
    req.onload = () => {
      let response = [JSON.parse(req.response), type];
      callback(response);
    };
  }
  /* Display of information according to the type of request*/
</script>

{#if type == "town"}
  <div class="card">
    <div class="map">
      <iframe
        title={result[0].name}
        src="https://laboulangerie.net/map/#minecraft_overworld;flat;4395,64,3826;3showinfo=0&controls=0"
      />
    </div>
    <div class="top_part">
      <p>{City_name(type)}</p>
      <h1>{result[0].name}</h1>
    </div>
    <div class="infos">
      <div class="sub_info">{result[0].residents.length} Résidents</div>
      <div class="sub_info">{result[0].townBlocks.length} Parcelles</div>
      <div class="sub_info">[{result[0].tag}]</div>
      {#if result[0].nation !== null}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="sub_info"
          style="cursor:pointer"
          on:click={Change_Request(result[0].nation.uuid, "nation")}
        >
          <Fa icon={faFlag} style="margin-right:10px" />
          {result[0].nation.name}
        </div>
      {/if}
    </div>
    <div class="residents_part"><h2>Résidents</h2></div>
    <div class="residents">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="resident"
        on:click={Change_Request(result[0].mayor.uuid, "player")}
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="{head}{result[0].mayor.uuid}" />
        <span class="mayor">{result[0].mayor.name}</span>
        <span>Maire</span>
      </div>
      {#each result[0].residents as character}
        {#if character.name !== result[0].mayor.name}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="resident"
            on:click={Change_Request(character.uuid, "player")}
          >
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="{head}{character.uuid}" />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span class={character.name}>
              {character.name}
            </span>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/if}

{#if type == "player"}
  <div class="infos_player">
    {#if result[0].resident.title !== ""}
      <h3>{result[0].resident.title}</h3>
    {/if}
    <h1>{result[0].name}</h1>
    <div class="player_nav">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="player_sub_info"
        style="cursor:pointer"
        on:click={Change_Request(result[0].resident.town.uuid, "town")}
      >
        <h4>
          <Fa icon={faHouse} style="margin-right:10px" />{result[0].resident
            .town.name}
        </h4>
      </div>
      {#if result[0].resident.nation !== undefined}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="player_sub_info"
          style="cursor:pointer"
          on:click={Change_Request(result[0].resident.nation.uuid, "nation")}
        >
          <h4>
            <Fa icon={faFlag} style="margin-right:10px" />{result[0].resident
              .nation.name}
          </h4>
        </div>
      {/if}
      <div class="player_sub_info {result[0].isOnline}">
        {#if result[0].isOnline == true}<h4>Online</h4>{:else}
          <h4>Offline</h4>
        {/if}
      </div>
    </div>
    <div class="skills">
      {#each result[0].mmo.talents as talent}
        <div class={talent.name}>
          <div class="v1_30">
            <div
              class="v1_31"
              style="background: linear-gradient(90deg,#FF8C42  0%, #F9C784 {((Math.trunc(
                talent.xp
              ) -
                talent.minLevelXp) *
                100) /
                talent.xpToNextLevel}%, #4E598C {((Math.trunc(talent.xp) -
                talent.minLevelXp) *
                100) /
                talent.xpToNextLevel +
                1}%);"
            />
            <span class="v1_33"
              >{Math.trunc(talent.xp) -
                talent.minLevelXp}/{talent.xpToNextLevel}</span
            >
            <div class="v1_34">
              <div class="v1_35" />
              <div
                class="v1_36"
                style="background: url(./src/assets/images/{talent.name}.webp);  background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;"
              />
            </div>
            <span class="v1_37">{talent.name} {talent.level}</span>
          </div>
        </div>
      {/each}
    </div>
    <div class="player_img">
      <img
        src="{body}{result[0].uuid}"
        alt="Image du skin de {result[0].name}"
      />
    </div>
  </div>
{/if}

{#if type == "nation"}
  <div class="card">
    <div class="map">
      <iframe
        title={result[0].name}
        src="https://laboulangerie.net/map/#minecraft_overworld;flat;4395,64,3826;3showinfo=0&controls=0"
      />
      <p>{City_name(type)}</p>
      <h1>{result[0].name}</h1>
    </div>
    <div class="infos">
      <div class="sub_info">{result[0].residents.length} Résidents</div>
      <div class="sub_info">{result[0].tag}</div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="sub_info"
        style="cursor:pointer"
        on:click={Change_Request(result[0].capital.uuid, "town")}
      >
        <Fa icon={faHouse} style="margin-right:10px" />{result[0].capital.name}
      </div>
    </div>
    <div class="residents">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="resident"
        on:click={Change_Request(result[0].king.uuid, "player")}
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="{head}{result[0].king.uuid}" />
        <span class="mayor">{result[0].king.name}</span>
        <span>Dirigeant</span>
      </div>
      {#each result[0].residents as character}
        {#if character.name !== result[0].king.name}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="resident"
            on:click={Change_Request(character.uuid, "player")}
          >
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="{head}{character.uuid}" />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span class={character.name}>
              {character.name}
            </span>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/if}
{#if type == undefined || type == ""}
  <p>Lancez votre recherche !</p>
{/if}

<style>
</style>
