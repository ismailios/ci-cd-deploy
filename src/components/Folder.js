import React, { useState } from 'react'

const Folder = ({ explorer }) => {

    const [expand, setExpand] = useState(false)

    if (explorer.isFolder) {
        return <div style={{ margin: 10 }}>
            <div onClick={() => setExpand(!expand)} className="folder">
                <span>
                    📁 {explorer.name}
                </span>
                <span>
                    <button >Folder + </button>
                </span>
                <span>
                    <button >File + </button>
                </span>

            </div>
            <div style={{ marginLeft: 20, display: expand ? "block" : "none" }}>
                {explorer.items.map((exp) => {
                    return <Folder explorer={exp} key={exp.id} />
                })}
            </div>
        </div>
    }
    else {
        return <div> 📃 {explorer.name}</div>
    }
}

export default Folder