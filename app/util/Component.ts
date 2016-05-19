import {Decorator} from './Decorator';
import {ChangeDetectionStrategy, Type, ViewEncapsulation} from '@angular/core';

export interface PlatformComponentMetadata {
    providers?: any[];
    templateUrl?: string;
    styleUrls?: string[];
    directives?: Array<Type | any[]>;
}

export interface PlatformDirectiveMetadata {
    providers?: any[];
}

export interface ComponentMetadata {
    selector?: string;
    inputs?: string[];
    outputs?: string[];
    properties?: string[];
    events?: string[];
    host?: {
        [key: string]: string;
    };
    bindings?: any[];
    providers?: any[];
    exportAs?: string;
    moduleId?: string;
    queries?: {
        [key: string]: any;
    };
    viewBindings?: any[];
    viewProviders?: any[];
    changeDetection?: ChangeDetectionStrategy;
    templateUrl?: string;
    template?: string;
    styleUrls?: string[];
    styles?: string[];
    directives?: Array<Type | any[]>;
    pipes?: Array<Type | any[]>;
    encapsulation?: ViewEncapsulation;
}

export interface DirectiveMetadata {
    selector?: string;
    inputs?: string[];
    outputs?: string[];
    properties?: string[];
    events?: string[];
    host?: {
        [key: string]: string;
    };
    bindings?: any[];
    exportAs?: string;
    queries?: {
        [key: string]: any;
    };
}

export interface Metadata extends ComponentMetadata, DirectiveMetadata { }
export interface PlatformMetadata extends PlatformComponentMetadata, PlatformDirectiveMetadata { }

export function Component(metadata: ComponentMetadata, platformMetadata: PlatformComponentMetadata = {}) {
    return function (cls: any) {
        return Decorator.annotateComponent(cls, metadata, platformMetadata);
    }
}

export function Directive(metadata: DirectiveMetadata, platformMetadata: PlatformDirectiveMetadata = {}) {
    return function (cls: any) {
        return Decorator.annotateDirective(cls, metadata, platformMetadata);
    }
}