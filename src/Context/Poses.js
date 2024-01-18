import React, { createContext, useState, useEffect } from "react";

export const PoseContext = createContext({});

export default function ProfileProvider(props) {
  const [dataPoses, setDataPoses] = useState([]);
  const [excelExport, setExcelExport] = useState([]);
  
  const addPose = async(angle, label)=>{
    // setDataPoses([...dataPoses, pose])

    // let poseField = {}
    //    pose.pose.keypoints3D.forEach(itemkey=>{
    //     poseField[itemkey.name+"_x"] = itemkey.x.toFixed(5)
    //     poseField[itemkey.name+"_y"] = itemkey.y.toFixed(5)
    //     poseField[itemkey.name+"_z"] = itemkey.z.toFixed(5)
    //     poseField[itemkey.name+"_score"] = itemkey.score.toFixed(5)  
    //   })
      let dataItem =  {label,
        R_SEW: angle.R_SEW,R_ESH : angle.R_ESH,
        L_SEW: angle.L_SEW,L_ESH : angle.L_ESH,
        R_HKA: angle.R_HKA,L_HKA : angle.L_HKA,
        R_KAF: angle.R_KAF,L_KAF : angle.L_KAF,
        R_KHH: angle.R_KHH,L_KHH : angle.L_KHH,
        R_KHS: angle.R_KHS,L_KHS : angle.L_KHS,
        R_HSS: angle.R_HSS,L_HSS : angle.L_HSS,
        R_ESS: angle.R_ESS,L_ESS : angle.L_ESS
      }
      let gabungData = [...excelExport, dataItem]
      console.log('gabungData', gabungData)
    // let dataItem = Object.assign({}, {id:pose.id,label}, poseField)
    // console.log('dataItem', dataItem)
    // console.log('dataItem pose', pose)

    setExcelExport(gabungData)
  }

  const changeLabel = async(id, label)=>{
    const datachange = dataPoses.map(x=>{
      if(id === x.id){
        return({
          ...x, 
          label
        })
      }
      else{
        return x
      }
      
    })
    console.log('datachange', datachange, id, label)
    setDataPoses(datachange)
  }

  const deletePose = async(id)=>{
    const datachange = dataPoses.filter(x=>x.id !== id)
    setDataPoses(datachange)
  }

return (
  <PoseContext.Provider value={{ dataPoses, excelExport, addPose, deletePose, changeLabel }} {...props} />
);
}