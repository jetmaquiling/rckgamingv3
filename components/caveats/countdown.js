import * as React from "react"
import * as style from "@/styles/countdown.module.css"
import Link from "next/link"
import moment from 'moment'

const Countdown = () => {
    const [time, setTime] = React.useState({
		days: 1,
		hours: 7,
		minutes: 0,
		seconds: 0
	})
    const [radius, setRadius] = React.useState({
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	})

    React.useEffect(() => {
        setInterval(() => {
            const then = moment("10 13 2021, 24:00", "MM DD YYYY, h:mm");
            const now = moment();
            if(then < now){
                setTime({ days: undefined , hours: undefined, minutes: undefined, seconds: undefined });
            }else{
                const countdown = moment(then - now);
                const day = countdown.format('D');
                const hour = countdown.format('HH');
                const minute = countdown.format('mm');
                const second = countdown.format('ss');
                setTime({ days: day , hours: hour, minutes: minute, seconds: second });
                setRadius({ days: mapNumber(day, 30, 0, 0, 360) , hours: mapNumber(hour, 24, 0, 0, 360), minutes: mapNumber(minute, 60, 0, 0, 360), seconds: mapNumber(second, 60, 0, 0, 360) });
            }
            
          }, 1000);
    })


  return (
        <div className={style.main}>
            <h2  className={style.title}>RCK Token Sale</h2>
            <p  className={style.subtitle}>Join the RCK Community to discuss where the markets are heading. </p>
            <p  className={style.subtitle}>We accept BNB Tokens.</p>

            <div className={style.backdrop}>
                <div className={style.countdownwrapper}>
                 
                    <div className={style.countdownitem}>
                      <SVGCircle radius={radius.days} time={time.days} />
                      {time.days - 1} 
                      <span>days</span>
                    </div>
                
                 
                    <div className={style.countdownitem}>							
                      <SVGCircle radius={radius.hours} time={time.hours} />
                      {time.hours - 7} 
                      <span>hours</span>
                    </div>
                 
                 
                    <div className={style.countdownitem}>
                      <SVGCircle radius={radius.minutes} time={time.minutes} />
                      {time.minutes } 
                      <span>minutes</span>
                    </div>
               
                  
                    <div className={style.countdownitem}>
                      <SVGCircle radius={radius.seconds} time={time.seconds} />
                      {time.seconds} 
                      <span>seconds</span>
                    </div>
                 
                </div>
                <div  className={style.buttonContainer} >
                    <a href="https://hub.rpsaxess.io/" target="_blank">
                      <div  className={`${style.buttonBox} ${style.buttonBox2}`} >
                        <h4 className={style.h4animate}>{"Buy Tokens >"}</h4>
                      </div>
                    </a>
                </div>
            </div>
            <div className={style.infoContainer} >
              <div className={style.infoRow} >
                <div className={style.info} >
                  <h4 className={style.label} >Starting Time:</h4>
                  <h4 className={style.infoData}>OCT 9, 2021 (SAT 12:00 PM)</h4>
                </div>
               
                <div className={style.info} >
                  <h4 className={style.label} >Ending time:</h4>
                  <h4 className={style.infoData}>OCT 13, 2021 (WED 12:00 PM)</h4>
                </div>

              </div>

              <div className={style.infoRow} >

                <div className={style.info} >
                  <h4 className={style.label} >Total tokens sale</h4>
                  <h4 className={style.infoData}>100,000,000 RCK (10%)</h4>
                </div>

                <div className={style.info} >
                  <h4 className={style.label} >Tokens exchange rate:</h4>
                  <h4 className={style.infoData}>1 RCK = 0.00000901 BNB</h4>
                </div>

              </div>


              <div className={style.infoRow} >
                <div className={style.info} >
                  <h4 className={style.label} >Tokens exchange rate:</h4>
                  <h4 className={style.infoData}>1 RCK = $0.004</h4>
                </div>

                <div className={style.info} >
                  <h4 className={style.label} >Acceptable Currency :</h4>
                  <h4 className={style.infoData} >(BNB) Binance</h4>
                </div>
                
              </div>

            </div>
                
        </div>
  )
}

const SVGCircle = ({ radius, time }) => (
	<svg className={style.countdownsvg}>
		<path className={style.smooth} fill="none" stroke="#ffffff" stroke-width={time <= 1 || time == 59  ? '0' : "5" } d={describeArc(50, 50, 48, 0, radius)}/>
	</svg>
);





function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
export default Countdown
