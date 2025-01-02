import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, rect } from "react-native-svg";

const BreakPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigbluewave}></View>
      <View style={styles.waveContainer}>
        <Svg height="60%" width="100%" viewBox="0 0 1440 420">
          

          {/* Light Yellow Layer */}
          <Path
            fill="#FFECB3" // Light Yellow
            d="M0,96L80,101.3C160,107,320,117,480,122.7C640,128,800,128,960,133.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L0,320Z"
          />

          {/* Light Green Hills */}
          <Path
            fill="#a0d468" // Light Green
            d="M0,160L80,165.3C160,171,320,181,480,176C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96L1440,320L0,320Z"
          />

          {/* Darker Green Hills */}
          <Path
            fill="#4caf50" // Dark Green
            d="M0,224L80,213.3C160,203,320,181,480,170.7C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256L1440,320L0,320Z"
          />

          {/* Light Blue Waves */}
          <Path
            fill="#4fc3f7" // Light Blue
            d="M0,288L80,266.7C160,245,320,203,480,186.7C640,171,800,181,960,192C1120,203,1280,213,1360,218.7L1440,224L1440,320L0,320Z"
          />

          {/* Darker Blue Waves */}
          <Path
            fill="#0288d1" // Dark Blue
            d="M0,320L80,293.3C160,267,320,213,480,208C640,203,800,245,960,256C1120,267,1280,245,1360,229.3L1440,224L1440,320L0,320Z"
          />
        </Svg>
       
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#fff",
    justifyContent:"flex-end"
  
    
    
  },
  waveContainer: {
    height: "25%",
    width: "100%",
    position: "absolute",
    
    
   
    
  },
  bigbluewave: {
    backgroundColor: "#4fc3f7",
    height: "20%",
    width: "100%",
    
   
   
    
  },
});

export default BreakPage;
