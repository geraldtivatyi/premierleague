import classes from "./fixtures.module.css";
import { Link } from "react-router-dom";
import { sorted } from "../restructured/sorteddata";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function FixturesPage() {
  let { teamuc } = useParams();
  console.log("teamUC: ", teamuc);
  return (
    <div>
      <div className={classes.title}>
        <h1>Fixture List</h1>
        <Link to="/">
          <div className={classes.backbutton}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>
            <p>back to tables...</p>
          </div>
        </Link>
      </div>
      {sorted.map((d) => {
        var date = new Date(d.date),
          time = date.getHours() + ":" + date.getMinutes(),
          newFormat =
            format(
              new Date(date.getFullYear(), date.getMonth(), date.getDate()),
              "dd/MM"
            ) +
            ", " +
            time;
        if (date.getMinutes() === 0) {
          time = date.getHours() + ":00";
          newFormat = date.getDate() + "/" + date.getMonth() + ", " + time;
        }
        if (
          d.score[Object.keys(d.score)[0]] === null ||
          d.score[Object.keys(d.score)[0]] === undefined
        ) {
          if (
            Object.keys(d.score)[0] === teamuc ||
            Object.keys(d.score)[1] === teamuc
          )
            return (
              <div className={classes.fixturelist}>
                <h2>{newFormat}</h2>
                <div className={classes.fixture}>
                  <p className={classes.team1}>{Object.keys(d.score)[0]}</p>
                  <p className={classes.time}>
                    <b>{time}</b>
                  </p>
                  <p className={classes.team2}>{Object.keys(d.score)[1]}</p>
                </div>
              </div>
            );
        } else {
          if (
            Object.keys(d.score)[0] === teamuc ||
            Object.keys(d.score)[1] === teamuc
          )
            return (
              <div className={classes.fixturelist}>
                <h2>{newFormat}</h2>
                <div className={classes.fixture}>
                  <p>{Object.keys(d.score)[0]}</p>
                  <p>{d.score[Object.keys(d.score)[0]]}</p>
                  <p>
                    <b>{time}</b>
                  </p>
                  <p>{d.score[Object.keys(d.score)[1]]}</p>
                  <p>{Object.keys(d.score)[1]}</p>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}

export default FixturesPage;
