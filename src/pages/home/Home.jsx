import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart";
import "./home.css" 
import {dashboardData} from "../../tempdata";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

export default function home() {
    return (
        <div className ="Home">
            <FeaturedInfo />
            <Chart data={dashboardData} />
            
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
