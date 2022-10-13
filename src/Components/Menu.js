import { useStore } from "../hooks/useStore"



export const Menu = () => {

     const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
     
     return (<div className="menu absolute">
        <button onClick={() => saveWorld()}>
            Save 
        </button>


        <button onClick={() => resetWorld()}>
            Reset 
        </button>

        <div >
      <ul>
          <li>Z : Walk Forward</li>
          <li>S : Walk Backward</li>
          <li>Q : Walk Left</li>
          <li>D : Walk Right</li>
          <li>Alt + Click : Remove Cube</li>
          <li>Mouse : Turn Around  </li>
          <li>1|2|3|4|5 : Switch Cube Texture  </li>

    </ul> 
      </div>
     </div>)
}