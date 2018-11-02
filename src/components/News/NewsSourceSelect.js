import React from 'react'

const NewsSourceSelect = (props)=> {

    return(
      <div>
        <select id="newstype" onChange={props.changeEndpoint}>
          <option value="">--Choose an option:--</option>
          <option  value="top-headlines">Top Headlines</option>
          <option  value="everything">Search Everything</option>
        </select>
        <select id="source" onChange={props.changeSource} value={props.source}>
          {props.sources.map((source, id)=> {
            return <option key={id} value={props.sources.id}>{source.name}</option>
          })}
        </select>
      </div>

    )
}


export default NewsSourceSelect;
