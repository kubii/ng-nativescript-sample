import {Decorator} from './Decorator';
import {ChangeDetectionStrategy, Type, ViewEncapsulation} from '@angular/core';

interface CustomComponentDecorator {
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

interface CustomDirectiveDecorator {
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
    queries?: {
        [key: string]: any;
    };
}

export function Component(metadata: CustomComponentDecorator) {
    return function (cls: any) {
        return Decorator.annotateComponent(cls, metadata);
    }
}

export function Directive(metadata: CustomDirectiveDecorator) {
    return function (cls: any) {
        return Decorator.annotateDirective(cls, metadata);
    }
}