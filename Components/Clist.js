
import React from 'react';
// import Navbar from './Navbar.js';

function Clist() {
  return (
    <div>

      <main>
        <div className="container">
          <div id="card-alert" className="card light-blue lighten-5">
            <div className="card-content light-blue-text">
              <p id="loc_info">NEWS : You have done 5 actions.</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Election Symbol</th>
                <th>Party</th>
                <th>Candidate Name</th>
                <th>Vote</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><img src="public/bjp.png" alt=" " height="42" width="42" /></td>
                <td>Bharatiya Janata Party</td>
                <td id="cand1">Sanat Taori</td>
                <td><button id="vote1" className="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
              </tr>
              <tr>
                <td><img src="public/cong.png" alt=" " height="42" width="42" /></td>
                <td>Indian National Congress</td>
                <td id="cand2">Aniket Narkhede</td>
                <td><button id="vote2" className="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
              </tr>
              <tr>
                <td><img src="public/rsc.png" alt=" " height="42" width="42" /></td>
                <td>Nationalist Congress Party</td>
                <td id="cand3">Mandar Patil</td>
                <td><button id="vote3" className="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
              </tr>
              <tr>
                <td><img src="public/shiv.png" alt=" " height="42" width="42" /></td>
                <td>Shiv Sena</td>
                <td id="cand4">Akshay Motghare</td>
                <td><button id="vote4" className="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>


      <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
      <script src="https://cdn.rawgit.com/ethereum/web3.js/develop/dist/web3.js"></script>
      <script type="text/javascript" src="js/clist.js"></script> 
    </div>
  );
}

export default Clist;
