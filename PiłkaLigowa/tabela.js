document.addEventListener("DOMContentLoaded", function () {
    fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=2&key=2u5agXqAVZ35OMvW&secret=Dkfid3UKQuvPPayRED2VAswwszBgl7cY")
      .then(response => response.json())
      .then(data => {
        const tableBody_ANG = document.getElementById("table-body_ANG");

        // Przechodzimy przez dane i tworzymy wiersze tabeli
        data.data.table.forEach(team => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${team.rank}</td>
            <td>${team.name}</td>
            <td>${team.points}</td>
            <td>${team.matches}</td>
            <td>${team.goal_diff}</td>
            <td>${team.goals_scored}</td>
            <td>${team.goals_conceded}</td>
            <td>${team.lost}</td>
            <td>${team.drawn}</td>
            <td>${team.won}</td>
          `;

          
          tableBody_ANG.appendChild(row);
        });
      })
      
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=1&key=2u5agXqAVZ35OMvW&secret=Dkfid3UKQuvPPayRED2VAswwszBgl7cY")
      .then(response => response.json())
      .then(data => {
        const tableBody_GER = document.getElementById("table-body_GER");

        // Przechodzimy przez dane i tworzymy wiersze tabeli
        data.data.table.forEach(team => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${team.rank}</td>
            <td>${team.name}</td>
            <td>${team.points}</td>
            <td>${team.matches}</td>
            <td>${team.goal_diff}</td>
            <td>${team.goals_scored}</td>
            <td>${team.goals_conceded}</td>
            <td>${team.lost}</td>
            <td>${team.drawn}</td>
            <td>${team.won}</td>
          `;

          tableBody_GER.appendChild(row);
        });
      })
      
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=4&key=2u5agXqAVZ35OMvW&secret=Dkfid3UKQuvPPayRED2VAswwszBgl7cY")
    .then(response => response.json())
    .then(data => {
      const tableBody_ITL = document.getElementById("table-body_ITL");

      // Przechodzimy przez dane i tworzymy wiersze tabeli
      data.data.table.forEach(team => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${team.rank}</td>
          <td>${team.name}</td>
          <td>${team.points}</td>
          <td>${team.matches}</td>
          <td>${team.goal_diff}</td>
          <td>${team.goals_scored}</td>
          <td>${team.goals_conceded}</td>
          <td>${team.lost}</td>
          <td>${team.drawn}</td>
          <td>${team.won}</td>
        `;

        tableBody_ITL.appendChild(row);
      });
    })
    
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=5&key=2u5agXqAVZ35OMvW&secret=Dkfid3UKQuvPPayRED2VAswwszBgl7cY")
    .then(response => response.json())
    .then(data => {
      const tableBody_FR = document.getElementById("table-body_FR");

      // Przechodzimy przez dane i tworzymy wiersze tabeli
      data.data.table.forEach(team => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${team.rank}</td>
          <td>${team.name}</td>
          <td>${team.points}</td>
          <td>${team.matches}</td>
          <td>${team.goal_diff}</td>
          <td>${team.goals_scored}</td>
          <td>${team.goals_conceded}</td>
          <td>${team.lost}</td>
          <td>${team.drawn}</td>
          <td>${team.won}</td>
        `;

        tableBody_FR.appendChild(row);
      });
    })
    
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://livescore-api.com/api-client/leagues/table.json?competition_id=3&key=2u5agXqAVZ35OMvW&secret=Dkfid3UKQuvPPayRED2VAswwszBgl7cY")
    .then(response => response.json())
    .then(data => {
      const tableBody_ESP = document.getElementById("table-body_ESP");

      // Przechodzimy przez dane i tworzymy wiersze tabeli
      data.data.table.forEach(team => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${team.rank}</td>
          <td>${team.name}</td>
          <td>${team.points}</td>
          <td>${team.matches}</td>
          <td>${team.goal_diff}</td>
          <td>${team.goals_scored}</td>
          <td>${team.goals_conceded}</td>
          <td>${team.lost}</td>
          <td>${team.drawn}</td>
          <td>${team.won}</td>
        `;

        tableBody_ESP.appendChild(row);
      });
    })
   
});


document.addEventListener('DOMContentLoaded', function () {
  var leagueItems = document.querySelectorAll('.ligi li');

  leagueItems.forEach(function (item) {
      var img = item.querySelector('img');
      var table = item.querySelector('div');

      if (img && table) {
          img.addEventListener('click', function () {
              if (table && (table.style.display === 'none' || table.style.display === '')) {
                  table.style.display = 'block';
              } else if (table) {
                  table.style.display = 'none';
              }
          });
      }
  });
});

