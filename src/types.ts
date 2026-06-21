/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  enTitle: string;
  description: string;
  details: string[];
}

export interface CaseItem {
  id: string;
  tag: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface MemberItem {
  name: string;
  role: string;
  enRole: string;
  career: string[];
}
