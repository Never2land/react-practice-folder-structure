import React, { Fragment, useState } from 'react';
import Icon from './Icon';

const Folder = ({ files }) => {
  const [expanded, setExpanded] = useState(false);

  const getExtention = (fileName) => {
    const arr = fileName.split('.');
    return arr[arr.length - 1].toLowerCase();
  };

  return (
    <div>
      <div
        style={divStyles}
        className={`hover-styles`}
        onClick={() => setExpanded(!expanded)}
      >
        {!files.isFolder && (
          <Fragment>
            <Icon name={getExtention(files.name)} style={iconStyles} />
          </Fragment>
        )}
        {files.isFolder && (
          <Fragment>
            {expanded ? (
              <Icon name="caretDown" style={iconStyles} />
            ) : (
              <Icon name="caretRight" style={iconStyles} />
            )}
          </Fragment>
        )}
        {files.name}
      </div>
      {files.isFolder &&
        expanded &&
        files.children.map((file, idx) => (
          <div style={{ paddingLeft: '20px' }}>
            <Folder files={file} />
          </div>
        ))}
    </div>
  );
};

const iconStyles = { height: '12px', marginRight: '4px', flexShrink: 0 };

const divStyles = {
  color: '#fff',
  cursor: 'pointer',
  padding: '2px 4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
};

export default Folder;
