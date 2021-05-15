import classes from "./table.module.css";
import { allteams } from "../restructured/alldetails";

function Table() {
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Position</th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
        {allteams.map((d) => {
          return (
            <tr>
              <td>{d.Position}</td>
              <td>
                <a href={"/fixtures/" + d.Club} exact>
                  {d.Club}
                </a>
              </td>
              <td>{d.Played}</td>
              <td>{d.Won}</td>
              <td>{d.Draw}</td>
              <td>{d.Lost}</td>
              <td>{d.GF}</td>
              <td>{d.GA}</td>
              <td>{d.GD}</td>
              <td>{d.Points}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
