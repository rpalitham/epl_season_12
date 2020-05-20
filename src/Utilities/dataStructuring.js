import matches from "./matches.json";
import teams from "./teams.json";

export const dataStructuring = () => {
  let totalTeamDetails = {};
  teams.clubs.forEach(
    (club) =>
      (totalTeamDetails[club.key] = {
        matches: 0,
        won: 0,
        lost: 0,
        goalsScored: 0,
        goalsGave: 0,
        tie: 0,
      })
  );

  let newTeams = [];

  matches.rounds.forEach((round) => {
    round.matches.forEach((match) => {
      newTeams.push(match);
    });
  });

  newTeams.forEach((team) => {
    let team1Name = team.team1.key;
    let team2Name = team.team2.key;
    let team1Won = false;
    let team2Won = false;
    let team2Lost = false;
    let team1Lost = false;
    let tie = false;
    if (team.score1 > team.score2) {
      team1Won = true;
      team2Lost = true;
    } else if (team.score1 < team.score2) {
      team2Won = true;
      team1Lost = true;
    } else {
      tie = true;
    }

    let team1Matches = totalTeamDetails[team1Name].matches + 1;
    let team2Matches = totalTeamDetails[team2Name].matches + 1;

    let team1GoalsScored =
      totalTeamDetails[team1Name].goalsScored + team.score1;
    let team1GoalsGave = totalTeamDetails[team1Name].goalsGave + team.score2;
    let team2GoalsScored =
      totalTeamDetails[team2Name].goalsScored + team.score2;
    let team2GoalsGave = totalTeamDetails[team2Name].goalsGave + team.score1;

    let team1WonGames = team1Won
      ? totalTeamDetails[team1Name].won + 1
      : totalTeamDetails[team1Name].won;
    let team2WonGames = team2Won
      ? totalTeamDetails[team2Name].won + 1
      : totalTeamDetails[team2Name].won;

    let team1LostGames = team1Lost
      ? totalTeamDetails[team1Name].lost + 1
      : totalTeamDetails[team1Name].lost;
    let team2LostGames = team2Lost
      ? totalTeamDetails[team2Name].lost + 1
      : totalTeamDetails[team2Name].lost;

    let team1Tie = tie
      ? totalTeamDetails[team1Name].tie + 1
      : totalTeamDetails[team1Name].tie;
    let team2Tie = tie
      ? totalTeamDetails[team2Name].tie + 1
      : totalTeamDetails[team2Name].tie;

    totalTeamDetails[team1Name] = {
      matches: team1Matches,
      goalsScored: team1GoalsScored,
      goalsGave: team1GoalsGave,
      won: team1WonGames,
      lost: team1LostGames,
      tie: team1Tie,
      name: team.team1.name,
    };
    totalTeamDetails[team2Name] = {
      matches: team2Matches,
      goalsScored: team2GoalsScored,
      goalsGave: team2GoalsGave,
      won: team2WonGames,
      lost: team2LostGames,
      tie: team2Tie,
      name: team.team2.name,
    };
  });

  let matchesData = Object.values(totalTeamDetails).filter(
    (match) => match.name
  );

  return matchesData;
};
