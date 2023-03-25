import React from "react";
import '../App.css';

const Pricing = () => {
    return(
        <section className="pricing">
        <h2>Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Swedish Massage</td>
              <td>60 minutes</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Deep Tissue Massage</td>
              <td>60 minutes</td>
              <td>$90</td>
            </tr>
            <tr>
              <td>Sports Massage</td>
              <td>60 minutes</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
};
export default Pricing;