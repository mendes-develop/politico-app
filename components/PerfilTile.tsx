import React from "react"

export const PerfilTile = (props) => {


  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid red',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignSelf: 'center',
          padding: 8,
        }}
      >
        <img
          src={props.img}
          width={30}
          height={30}
          style={{
            borderRadius: '100%',
            border: '1px solid red',
          }}
        />
      </div>

      <div
        style={{
          padding: 6,
        }}
      >
        <p style={{ margin: 0 }}>{props.name}</p>
        <p style={{ margin: 0 }}>{props.cep}</p>
      </div>
    </div>
  );
};