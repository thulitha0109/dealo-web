declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.gif' {
    const content: string;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}

declare module '*.m4v' {
    const content: string;
    export default content;
}

declare module '*.mp4' {
    const content: string;
    export default content;
}

declare module '*.fbx' {
    const content: string;
    export default content;
}

declare module 'three/examples/jsm/loaders/FBXLoader' {
    import { Loader, LoadingManager, Group } from 'three';
    export class FBXLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (object: Group) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        parse(FBXBuffer: ArrayBuffer | string, path: string): Group;
    }
}
