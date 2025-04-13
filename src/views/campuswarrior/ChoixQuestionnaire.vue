<template class="background-epreuve">
  <div class="background">
    <div class="container-epreuve">
      <div class="row-epreuve">
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '1' } }"
        >
          Campus-Warrior Candidat 1
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '2' } }"
        >
          Campus-Warrior Candidat 2
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '3' } }"
        >
          Campus-Warrior Candidat 3
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '4' } }"
        >
          Campus-Warrior Candidat 4
        </router-link>
      </div>
      <div class="row-epreuve">
        <router-link
          class="campuswarrior-epreuve"
          :to="{
            name: 'CampusWarrior-Epreuve',
            query: { candidat: '5' },
          }"
        >
          Campus-Warrior Candidat 5
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{
            name: 'CampusWarrior-Epreuve',
            query: { candidat: '6' },
          }"
        >
          Campus-Warrior Candidat 6
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '7' } }"
        >
          Campus-Warrior Candidat 7
        </router-link>
        <router-link
          class="campuswarrior-epreuve"
          :to="{ name: 'CampusWarrior-Epreuve', query: { candidat: '8' } }"
        >
          Campus-Warrior Candidat 8
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scope>
.campuswarrior-epreuve {
  all: unset;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #eeeeee;
}

.campuswarrior-epreuve::after {
  all: unset;
}

.container-epreuve {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.row-epreuve {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 100px;
}

.background {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
}
</style>
