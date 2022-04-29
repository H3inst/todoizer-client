function Dashboard() {

  const render = () => {
    return (
      <div className="Dashboard-Layout">
        <div className="Dashboard-Topbar">

        </div>
        <div className="Dashboard-Page">
          <div className="Dashboard-Sidepanel"></div>
          <main></main>
        </div>
      </div>
    );
  }

  return render();
}

export default Dashboard;