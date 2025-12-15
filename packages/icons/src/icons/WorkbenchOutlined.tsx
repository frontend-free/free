import { createIcon } from '../utils';

const svgContent = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 16.5H11.25V18H7.5V19.5H16.5V18H12.75V16.5H16.5C18.1569 16.5 19.5 15.1569 19.5 13.5V7.5C19.5 5.84315 18.1569 4.5 16.5 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5V13.5C4.5 15.1569 5.84315 16.5 7.5 16.5ZM16.5 6H7.5C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15H16.5C17.3284 15 18 14.3284 18 13.5V7.5C18 6.67157 17.3284 6 16.5 6Z" fill="#777777"/>
</svg>`;

export const WorkbenchOutlined = createIcon('WorkbenchOutlined', svgContent);

export default WorkbenchOutlined;
