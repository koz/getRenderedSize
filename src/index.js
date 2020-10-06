import { render } from 'react-dom';

const RENDER_CONTAINER_ID = '__REACT_RENDERED_SIZE_CONTAINER__';
const DEFAULT_CONTAINER_ELEMENT = 'div';

const getMainContainer = (containerId) => {
  if (typeof document === 'undefined') {
    return;
  }

  return document.getElementById(containerId) || createMainContainer();
};

const createMainContainer = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const container = document.createElement(DEFAULT_CONTAINER_ELEMENT);

  container.id = RENDER_CONTAINER_ID;
  container.style.left = '-10000px';
  container.style.position = 'absolute';
  container.style.top = '-10000px';
  container.style.visibility = 'hidden';
  document.body.appendChild(container);
  return container;
};

export default async ({ element, containerWidth, containerElementTag = DEFAULT_CONTAINER_ELEMENT, containerId = RENDER_CONTAINER_ID}) => {
  if (typeof document === 'undefined') {
    return;
  }
  const renderContainer = document.createElement(containerElementTag);
  const mainContainer = getMainContainer(containerId);

  if (!mainContainer) {
    return;
  }

  mainContainer.appendChild(renderContainer);
  renderContainer.style.width = `${containerWidth}px`;

  const size = await new Promise((resolve, reject) => {
    render(element, renderContainer, () => {
      setTimeout(() => {
        const rendered = renderContainer.firstChild;
        if (rendered) {
          resolve({
            height: rendered.offsetHeight,
            width: rendered.offsetWidth,
          });
        } else {
          resolve({});
        }
      }, 200);
    });
  });

  mainContainer.removeChild(renderContainer);

  return size;
};
