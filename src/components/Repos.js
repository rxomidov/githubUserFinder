import React from 'react';
import styled from 'styled-components';
import {GithubContext} from '../context/context';
import {ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D} from './Charts';

const Repos = () => {
    const {repos} = React.useContext(GithubContext);
    //console.log(repos);
    let languages = repos.reduce((total, item) => {
        //console.log(item);
        const {language, stargazers_count} = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = {
                label: language, value: 1,
                stars: stargazers_count,
            };
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            }
        }
        return total
    }, {});
    //console.log(languages)
    const mostUsed = Object.values(languages).sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5);
    const mostPopular = Object.values(languages)
        .sort((a,b)=>{
            return b.stars = a.stars;
        })
        .map((item)=>{
            return{...item,value:item.stars};
        }).slice(0,5);
    const chartData = [
        {
            label: "HTML",
            value: "15"
        },
        {
            label: "CSS",
            value: "28"
        },
        {
            label: "JavaScript",
            value: "57"
        }
    ];
    return <section className="section">
        <Wrapper className="section-center">
            <div className="div">
                <Pie3D data={mostUsed}/>
                {/*<ExampleChart data={chartData}/>*/}
                <div></div>
                <Doughnut2D data={mostPopular}/>
                <Column3D data={chartData}/>
            </div>
        </Wrapper>
    </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  .div{
    height: 300px;
    div{
      padding: 0.5rem 0;
    }
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
