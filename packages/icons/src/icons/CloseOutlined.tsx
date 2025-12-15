import { createIcon } from '../utils';

const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8152 17.8336L17.3456 18.364L18.4062 17.3033L17.8759 16.773L13.1029 12L17.8759 7.22703L18.4062 6.6967L17.3456 5.63604L16.8152 6.16637L12.0423 10.9393L7.26929 6.16637L6.73896 5.63604L5.6783 6.6967L6.20863 7.22703L10.9816 12L6.20863 16.773L5.6783 17.3033L6.73896 18.364L7.26929 17.8336L12.0423 13.0607L16.8152 17.8336Z" fill="#15191E"/>
</svg>`;

export const CloseOutlined = createIcon('CloseOutlined', svgContent);

export default CloseOutlined;
