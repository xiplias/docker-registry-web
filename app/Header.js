/** @jsx React.DOM */

module.exports = React.createClass({
  render: function () {
    return (
      <header>
        <div className="container">
          <div className="clearfix">
            <div className="col col-12">
              <ul className="menu">
                  <li className="logo">
                    <Link to="/">
                      <svg viewBox="0 0 429 284" xmlns="http://www.w3.org/2000/svg"><g transform="translate(10 10)" stroke="#707070" fill="none"><path d="M36.8 129.3V85.8h43.4V43H165V.2h44.5v85.6h42.3l.2 44.1" id="Shape"/><path d="M0 129v29.8s-.8 22.4 23.2 57c19.1 27.5 49 36.8 49 36.8s25.2 12.8 68 11.2c42.8-1.6 65.5-9 65.5-9s64-16.8 100-60.2c36-43.4 40.2-67 40.2-67s14 5 34-2.8c6.8-2.6 22.1-13.2 26-20.2 3-5.5 3-7.5 3-7.5s-12.2-13.8-53.8-5.5c0 0-.2-25.8-28-46.2 0 0-27 28-2 69.2 0 0-12 12-38.8 14.5-4.8.5-17.3.7-34.5.9-77.6.7-251.8-1-251.8-1zM23.2 215.8s62.5 2 78-6.2"/><circle fill="#707070" cx="121.4" cy="196.4" r="10.4"/></g></svg>
                    </Link>
                  </li>
                  <li><Link to="images">Images</Link></li>
                  <li><a href="/events">Event Stream</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
});
