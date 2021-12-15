/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 @license
 Copyright (c) 2015 Simon Friis Vindum.
 This code may only be used under the MIT License found at
 https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 Code distributed by Snabbdom as part of the Snabbdom project at
 https://github.com/snabbdom/snabbdom/
 */

import { VM } from '../../framework/vm';

export type Key = string | number;

export const enum VNodeType {
    Text,
    Comment,
    Element,
    CustomElement,
}

export type VNode = VText | VComment | VElement | VCustomElement;
export type VParentElement = VElement | VCustomElement;
export type VNodes = Array<VNode | null>;

export interface VBaseNode {
    sel: string | undefined;
    data: VNodeData;
    children: VNodes | undefined;
    elm: Node | undefined;
    text: string | undefined;
    key: Key | undefined;
    owner: VM;
    type: VNodeType;
}

export interface VBaseElement extends VBaseNode {
    sel: string;
    data: VElementData;
    children: VNodes;
    elm: Element | undefined;
    text: undefined;
    key: Key;
}

export interface VElement extends VBaseElement {
    type: VNodeType.Element;
}

export interface VCustomElement extends VBaseElement {
    mode: 'closed' | 'open';
    ctor: any;
    // copy of the last allocated children.
    aChildren?: VNodes;
    type: VNodeType.CustomElement;
}

export interface VText extends VBaseNode {
    sel: undefined;
    children: undefined;
    elm: Node | undefined;
    text: string;
    type: VNodeType.Text;
}

export interface VComment extends VBaseNode {
    sel: undefined;
    children: undefined;
    text: string;
    type: VNodeType.Comment;
}

export interface VNodeData {
    props?: Record<string, any>;
    attrs?: Record<string, string | number | boolean>;
    className?: string;
    style?: string;
    classMap?: Record<string, boolean>;
    styleDecls?: Array<[string, string, boolean]>;
    context?: Record<string, Record<string, any>>;
    on?: Record<string, Function>;
    svg?: boolean;
}

export interface VElementData extends VNodeData {
    key: Key;
}
