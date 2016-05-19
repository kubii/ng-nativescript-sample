import {Component, Directive} from '@angular/core';
import {CoreConfig, Platform} from '../core.config';
import {Metadata, PlatformMetadata} from './Component';
import {Url} from './url';

const _reflect: any = Reflect;
let noop = () => { };

export class Decorator {
    public static getMetadata(metadata: Metadata, platformMetadata: PlatformMetadata) {
        if (platformMetadata.templateUrl)
            metadata.templateUrl = platformMetadata.templateUrl;
            
        this.concatMetadataInfo(metadata, platformMetadata, 'styleUrls');
        this.concatMetadataInfo(metadata, platformMetadata, 'directives');
        this.concatMetadataInfo(metadata, platformMetadata, 'providers');

        return metadata;
    }
    
    private static concatMetadataInfo(metadata: Metadata, platformMetadata: PlatformMetadata, prop: string) {
        if (platformMetadata[prop]) {
            metadata[prop] = metadata[prop] || [];
            metadata[prop] = metadata[prop].concat(platformMetadata[prop]);
        }
    }

    public static annotateComponent(cls: any, metadata: Metadata, platformsMetadata: PlatformMetadata) {
        return Decorator.annotate(Component, cls, metadata, platformsMetadata);
    }

    public static annotateDirective(cls: any, metadata: Metadata, platformsMetadata: PlatformMetadata) {
        return Decorator.annotate(Directive, cls, metadata, platformsMetadata);
    }

    private static annotate(CompConst: any, cls: any, metadata: any = {}, platformsMetadata: PlatformMetadata) {
        let annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new CompConst(Decorator.getMetadata(metadata, platformsMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    }
}