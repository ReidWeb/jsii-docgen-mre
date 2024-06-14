# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### FunctionParams <a name="FunctionParams" id="jsii-docgen-mre.FunctionParams"></a>

Function parameters.

#### Initializer <a name="Initializer" id="jsii-docgen-mre.FunctionParams.Initializer"></a>

```typescript
import { FunctionParams } from 'jsii-docgen-mre'

const functionParams: FunctionParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.FunctionParams.property.paramOne">paramOne</a></code> | <code>string \| <a href="#jsii-docgen-mre.IOne">IOne</a>[]</code> | *No description.* |

---

##### `paramOne`<sup>Required</sup> <a name="paramOne" id="jsii-docgen-mre.FunctionParams.property.paramOne"></a>

```typescript
public readonly paramOne: string | IOne[];
```

- *Type:* string | <a href="#jsii-docgen-mre.IOne">IOne</a>[]

---

## Classes <a name="Classes" id="Classes"></a>

### ConstructFoo <a name="ConstructFoo" id="jsii-docgen-mre.ConstructFoo"></a>

#### Initializers <a name="Initializers" id="jsii-docgen-mre.ConstructFoo.Initializer"></a>

```typescript
import { ConstructFoo } from 'jsii-docgen-mre'

new ConstructFoo(fnParams: FunctionParams)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.ConstructFoo.Initializer.parameter.fnParams">fnParams</a></code> | <code><a href="#jsii-docgen-mre.FunctionParams">FunctionParams</a></code> | *No description.* |

---

##### `fnParams`<sup>Required</sup> <a name="fnParams" id="jsii-docgen-mre.ConstructFoo.Initializer.parameter.fnParams"></a>

- *Type:* <a href="#jsii-docgen-mre.FunctionParams">FunctionParams</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.ConstructFoo.property.internalParam">internalParam</a></code> | <code>string \| <a href="#jsii-docgen-mre.IOne">IOne</a>[]</code> | *No description.* |

---

##### `internalParam`<sup>Required</sup> <a name="internalParam" id="jsii-docgen-mre.ConstructFoo.property.internalParam"></a>

```typescript
public readonly internalParam: string | IOne[];
```

- *Type:* string | <a href="#jsii-docgen-mre.IOne">IOne</a>[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IOne <a name="IOne" id="jsii-docgen-mre.IOne"></a>

- *Implemented By:* <a href="#jsii-docgen-mre.IOne">IOne</a>

Interface for providing config for paramOne.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#jsii-docgen-mre.IOne.property.foo">foo</a></code> | <code>string</code> | Param foo. |

---

##### `foo`<sup>Required</sup> <a name="foo" id="jsii-docgen-mre.IOne.property.foo"></a>

```typescript
public readonly foo: string;
```

- *Type:* string

Param foo.

---

