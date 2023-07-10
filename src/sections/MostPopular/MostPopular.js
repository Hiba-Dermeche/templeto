
import popular_01 from "../../images/popular-01.jpg"
import popular_02 from "../../images/popular-02.jpg"
import popular_03 from "../../images/popular-03.jpg"
import popular_04 from "../../images/popular-04.jpg"
import popular_05 from "../../images/popular-05.jpg"
import popular_06 from "../../images/popular-06.jpg"
import popular_07 from "../../images/popular-07.jpg"
import popular_08 from "../../images/popular-08.jpg"
import { Card, SectionHeader } from "../../components/index"




const MostPopular = () => {
  return (
    <>
    
    <div className="section-wrapper">
      <SectionHeader> Most Popular</SectionHeader>
      
 


      
        <div className="most-popular-items">
            <Card image={popular_01}        title="Fortnite" category="Sandbox"   rate="3.8" download="2.3M"  />
            <Card image={popular_02}        title="PubG"     category="Stream-X"  rate="4.8" download="1.1M"  />
            <Card image={popular_03}        title="Dota2"    category="Legendary" rate="2.7" download="5.3M"  />
            <Card image={popular_04}        title="CS-Go"    category="Battle S"  rate="3.9" download="6.1M"  />
            <Card image={popular_05}        title="MinCraft" category="Legendary" rate="3.9" download="8.0M"  />
            <Card image={popular_06}        title="Eagle"    category="Matrics"   rate="8.9"  download="5.3M"  />
            <Card image={popular_07}        title="Data2"    category="StreamX"   rate="3.7"  download="9.1M"  />
            <Card image={popular_08}        title="Espace"   category="Monster"   rate="2.9"  download="2.1M"  />
        </div>
    </div>
    
    
    </>
    
  )
}

export default MostPopular
