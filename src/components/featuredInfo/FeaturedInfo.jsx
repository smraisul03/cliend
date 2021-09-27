import "./featuredinfo.css";
import { TrendingUpRounded, TrendingDownRounded } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Closed Tickets</span>
        <div className="featuredContainer">
          <span className="featuredData">112</span>
          <span className="featuredDataRate">
            -14 <TrendingDownRounded  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Open Tickets</span>
        <div className="featuredContainer">
          <span className="featuredData">40</span>
          <span className="featuredDataRate">
            +29 <TrendingUpRounded className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Loaners</span>
        <div className="featuredContainer">
          <span className="featuredData">25</span>
          <span className="featuredDataRate">
            +7 <TrendingUpRounded className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
