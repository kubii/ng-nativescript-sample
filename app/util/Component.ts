import {Decorator} from './Decorator';
import {ChangeDetectionStrategy, Type, ViewEncapsulation} from '@angular/core';

interface PlatformProperties {
    providers?: any[],
    templateUrl?: string;
    styleUrls?: string[];
    directives?: Array<Type | any[]>;
}

export interface PlatformComponentDecorator {
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
    platform?: PlatformProperties;
}

export interface PlatformDirectiveDecorator {
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
    platform?: PlatformProperties;
}

export interface Metadata extends PlatformComponentDecorator, PlatformDirectiveDecorator { }

export function Component(metadata: PlatformComponentDecorator) {
    return function (cls: any) {
        return Decorator.annotateComponent(cls, metadata);
    }
}

export function Directive(metadata: PlatformDirectiveDecorator) {
    return function (cls: any) {
        return Decorator.annotateDirective(cls, metadata);
    }
}