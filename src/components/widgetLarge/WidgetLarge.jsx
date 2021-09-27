
import "./widgetlarge.css";

export default function widgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Tickets</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Users</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Issue</th>
          <th className="widgetLargeTh">Description</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Carol, Susan</span>
            </td>
            <td className="widgetLargeDate">3 Jun 2021</td>
            <td className="widgetLargeIssues">Laptop Repair</td>
            <td className="widgetLargeDescription">User need to come and pick-up laptop.</td>
            <td className="widgetLargeStatus">
                <Button type="Pending"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Warhol, Andy</span>
            </td>
            <td className="widgetLargeDate">3 Jun 2021</td>
            <td className="widgetLargeIssues">Password Reset</td>
            <td className="widgetLargeDescription">User had their password resetted after account lockout.</td>
            <td className="widgetLargeStatus">
                <Button type="Pending"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Fitz, Yania</span>
            </td>
            <td className="widgetLargeDate">31 May 2021</td>
            <td className="widgetLargeIssues">Database Update</td>
            <td className="widgetLargeDescription">User need last name from "Fitz" to be updated to "Derby". </td>
            <td className="widgetLargeStatus">
                <Button type="Open"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Warhol, Andy</span>
            </td>
            <td className="widgetLargeDate">31 May 2021</td>
            <td className="widgetLargeIssues">Unlock Account</td>
            <td className="widgetLargeDescription">User had their account locked out. </td>
            <td className="widgetLargeStatus">
                <Button type="Resolved"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Wester, Buster</span>
            </td>
            <td className="widgetLargeDate">29 May 2021</td>
            <td className="widgetLargeIssues">Phone</td>
            <td className="widgetLargeDescription">User cannot make call, can only recieve inbound call.</td>
            <td className="widgetLargeStatus">
                <Button type="Resolved"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Samp, Lae</span>
            </td>
            <td className="widgetLargeDate">28 May 2021</td>
            <td className="widgetLargeIssues">Phone</td>
            <td className="widgetLargeDescription">User cannot recieve call, even inbound call.</td>
            <td className="widgetLargeStatus">
                <Button type="Resolved"/>
            </td>
        </tr>
        <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
                <span className="widgetLargeName">Gilbert, Haagan</span>
            </td>
            <td className="widgetLargeDate">28 May 2021</td>
            <td className="widgetLargeIssues">Printer Issue</td>
            <td className="widgetLargeDescription">User has been having trouble with getting their printer to connect to their laptop.</td>
            <td className="widgetLargeStatus">
                <Button type="Resolved"/>
            </td>
        </tr>

      </table>
    </div>
  );
}