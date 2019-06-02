import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import ShowsList from '../json/shows';
import './shows.scss';

const TableRow = (val, time) => {
    let condition = false;
    if (time === "future") {
        condition = val.start >= new Date();
    } else {
        condition = val.start < new Date();
    }
    if (condition) {
        return (
            <tr>
                <td className="date">
                    <p>{val.start.toLocaleDateString().replace(/\/20/g, '/')}</p>
                    <p>{(val.start.toLocaleTimeString() + " - " + val.end.toLocaleTimeString()).replace(/:00 /g, ' ').replace(/:00/g, '').toLowerCase()}</p>
                    {(!val.fb && !val.insta) ? null : <a className="event-social" href={val.fb}><FontAwesomeIcon icon={faFacebook} /></a>}
                </td>
                <td className="show">
                    <p><strong>{val.title}</strong></p>
                    <p>{val.information}</p>
                </td>
            </tr>
        )
    } else {
        return null;
    }
}


const ShowsTable = props => (
  <table>
      <tbody>
            {
                !props.reverse ? 
                ShowsList.map(val => (TableRow(val, props.time))) :
                ShowsList.slice(0).reverse().map(val => (TableRow(val, props.time)))
            }
      </tbody>
  </table>
)

const Shows = () => (
    <section className="center-vert" id="shows">
        <h3>Shows</h3>
        <ShowsTable reverse={false} time="future" />
        <h3>Past Shows</h3>
        <ShowsTable reverse={true} />
    </section>
)

export default Shows