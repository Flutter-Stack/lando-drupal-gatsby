# Start Lando

When you start Lando, you should get output something like this:

```
$ lando start
Let's get this party started! Starting app lando-gatsby-drupal...
landoproxyhyperion5000gandalfedition_proxy_1 is up-to-date
Creating network "landogatsbydrupal_default" with the default driver
Creating volume "landogatsbydrupal_data_appserver_nginx" with default driver
Creating volume "landogatsbydrupal_home_appserver_nginx" with default driver
Creating volume "landogatsbydrupal_data_appserver" with default driver
Creating volume "landogatsbydrupal_home_appserver" with default driver
Creating volume "landogatsbydrupal_data_database" with default driver
Creating volume "landogatsbydrupal_home_database" with default driver
Creating volume "landogatsbydrupal_data_nodejs" with default driver
Creating volume "landogatsbydrupal_home_nodejs" with default driver
Creating landogatsbydrupal_nodejs_1 ... done
Creating landogatsbydrupal_appserver_1 ... done
Starting landogatsbydrupal_appserver_1 ... done
Creating landogatsbydrupal_appserver_nginx_1 ... done
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   619  100   619    0     0   1881      0 --:--:-- --:--:-- --:--:--  1875
100 4879k  100 4879k    0     0  2488k      0  0:00:01  0:00:01 --:--:-- 3341k
 Drush Version   :  8.3.5

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  811k  100  811k    0     0   271k      0  0:00:02  0:00:02 --:--:--  271k
Loading composer repositories with package information
Installing dependencies (including require-dev) from lock file
    1/134:	https://codeload.github.com/minkphp/MinkGoutteDriver/legacy.zip/8b9ad6d2d95bc70b840d15323365f52fcdaea6ca
    2/134:	https://codeload.github.com/Seldaek/jsonlint/legacy.zip/ff2aa5420bfbc296cf6a0bc785fa5b35736de7c1
    3/134:	https://codeload.github.com/minkphp/MinkSelenium2Driver/legacy.zip/312a967dd527f28980cce40850339cd5316da092
    4/134:	https://codeload.github.com/instaclick/php-webdriver/legacy.zip/b5f330e900e9b3edfc18024a5ec8c07136075712
    5/134:	https://codeload.github.com/Seldaek/phar-utils/legacy.zip/8674b1d84ffb47cc59a101f5d5a3b61e87d23796
    6/134:	https://codeload.github.com/easyrdf/easyrdf/legacy.zip/acd09dfe0555fbcfa254291e433c45fdd4652566
    7/134:	https://codeload.github.com/FriendsOfPHP/Goutte/legacy.zip/4ab5199e3ec0ffde0ee0b5ecf568a4fb8398dbae
    8/134:	https://codeload.github.com/drupal/core-dev/legacy.zip/34ab35ef70eb772c38178ad626e99e11267a7022
    9/134:	https://codeload.github.com/myclabs/DeepCopy/legacy.zip/969b211f9a51aa1f6c01d1d2aef56d3bd91598e5
    10/134:	https://codeload.github.com/phar-io/version/legacy.zip/45a2ec53a73c70ce41d55cedef9063630abaf1b6
    11/134:	https://codeload.github.com/bovigo/vfsStream/legacy.zip/231c73783ebb7dd9ec77916c10037eff5a2b6efe
    12/134:	https://codeload.github.com/justinrainbow/json-schema/legacy.zip/2ba9c8c862ecd5510ed16c6340aa9f6eadb4f31b
    13/134:	https://codeload.github.com/squizlabs/PHP_CodeSniffer/legacy.zip/73e2e7f57d958e7228fce50dc0c61f58f017f9f6
    14/134:	https://codeload.github.com/phpDocumentor/ReflectionDocBlock/legacy.zip/cd72d394ca794d3466a3b2fc09d5a6c1dc86b47e
    15/134:	https://codeload.github.com/phpDocumentor/TypeResolver/legacy.zip/e878a14a65245fbe78f8080eba03b47c3b705651
    16/134:	https://codeload.github.com/phpDocumentor/ReflectionCommon/legacy.zip/1d01c49d4ed62f25aa84a747ad35d5a16924662b
    17/134:	https://codeload.github.com/phar-io/manifest/legacy.zip/7761fcacf03b4d4f16e7ccb606d4879ca431fcf4
    18/134:	https://codeload.github.com/sebastianbergmann/code-unit-reverse-lookup/legacy.zip/4419fcdb5eabb9caa61a27c7a1db532a6b55dd18
    19/134:	https://codeload.github.com/doctrine/instantiator/legacy.zip/f350df0268e904597e3bd9c4685c53e0e333feea
    20/134:	https://codeload.github.com/composer/composer/legacy.zip/83c3250093d5491600a822e176b107a945baf95a
    21/134:	https://codeload.github.com/sebastianbergmann/php-text-template/legacy.zip/31f8b717e51d9a2afca6c9f046f5d69fc27c8686
    23/134:	https://codeload.github.com/phpspec/prophecy/legacy.zip/b20034be5efcdab4fb60ca3a29cba2949aead160
    23/134:	https://codeload.github.com/sebastianbergmann/php-file-iterator/legacy.zip/050bedf145a257b1ff02746c31894800e5122946
    24/134:	https://codeload.github.com/sebastianbergmann/php-timer/legacy.zip/1038454804406b0b5f5f520358e78c1c2f71501e
    25/134:	https://codeload.github.com/sebastianbergmann/diff/legacy.zip/720fcc7e9b5cf384ea68d9d930d480907a0c1a29
    26/134:	https://codeload.github.com/sebastianbergmann/environment/legacy.zip/464c90d7bdf5ad4e8a6aea15c091fec0603d4368
    27/134:	https://codeload.github.com/sebastianbergmann/exporter/legacy.zip/68609e1261d215ea5b21b7987539cbfbe156ec3e
    28/134:	https://codeload.github.com/sebastianbergmann/global-state/legacy.zip/edf8a461cf1d4005f19fb0b6b8b95a9f7fa0adc4
    29/134:	https://codeload.github.com/sebastianbergmann/object-enumerator/legacy.zip/7cfd9e65d11ffb5af41198476395774d4c8a84c5
    30/134:	https://codeload.github.com/theseer/tokenizer/legacy.zip/75a63c33a8577608444246075ea0af0d052e452a
    31/134:	https://codeload.github.com/sebastianbergmann/php-code-coverage/legacy.zip/f1884187926fbb755a9aaf0b3836ad3165b478bf
    32/134:	https://codeload.github.com/sebastianbergmann/comparator/legacy.zip/5de4fc177adf9bce8df98d8d141a7559d7ccf6da
    33/134:	https://codeload.github.com/sebastianbergmann/php-token-stream/legacy.zip/995192df77f63a59e47f025390d2d1fdf8f425ff
    34/134:	https://codeload.github.com/sebastianbergmann/recursion-context/legacy.zip/5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8
    35/134:	https://codeload.github.com/sebastianbergmann/object-reflector/legacy.zip/773f97c67f28de00d397be301821b06708fca0be
    36/134:	https://codeload.github.com/sebastianbergmann/resource-operations/legacy.zip/4d7a795d35b889bf80a0cc04e08d77cedfa917a9
    37/134:	https://codeload.github.com/sebastianbergmann/type/legacy.zip/3aaaa15fa71d27650d62a948be022fe3b48541a3
    38/134:	https://codeload.github.com/sebastianbergmann/version/legacy.zip/99732be0ddb3361e16ad77b68ba41efc8e979019
    39/134:	https://codeload.github.com/composer/xdebug-handler/legacy.zip/fa2aaf99e2087f013a14f7432c1cd2dd7d8f1f51
    40/134:	https://codeload.github.com/composer/spdx-licenses/legacy.zip/6946f785871e2314c60b4524851f3702ea4f2223
    41/134:	https://codeload.github.com/minkphp/MinkBrowserKitDriver/legacy.zip/e3b90840022ebcd544c7b394a3c9597ae242cbee
    42/134:	https://codeload.github.com/sebastianbergmann/phpunit/legacy.zip/34c18baa6a44f1d1fbf0338907139e9dce95b997
    43/134:	https://codeload.github.com/minkphp/Mink/legacy.zip/07c6a9fe3fa98c2de074b25d9ed26c22904e3887
    44/134:	https://codeload.github.com/symfony/css-selector/legacy.zip/afc26133a6fbdd4f8842e38893e0ee4685c7c94b
    45/134:	https://codeload.github.com/symfony/browser-kit/legacy.zip/f53310646af9901292488b2ff36e26ea10f545f5
    46/134:	https://codeload.github.com/consolidation/filter-via-dot-access-data/legacy.zip/a53e96c6b9f7f042f5e085bf911f3493cea823c6
    47/134:	https://codeload.github.com/symfony/dom-crawler/legacy.zip/c18354d5a0bb84c945f6257c51b971d52f10c614
    48/134:	https://codeload.github.com/symfony/phpunit-bridge/legacy.zip/84cb4467ca3ea127f636806e2f6f27c5c1de4eb9
    49/134:	https://codeload.github.com/symfony/lock/legacy.zip/b2c6895cf282cfc11fae859e8b418c95dbb5d6f8
    50/134:	https://codeload.github.com/Chi-teck/drupal-code-generator/legacy.zip/8abba7131ed4c89c1e8fc6dca0d05a4b6d0b2749
    51/134:	https://codeload.github.com/grasmash/expander/legacy.zip/95d6037344a4be1dd5f8e0b0b2571a28c397578f
    52/134:	https://codeload.github.com/consolidation/config/legacy.zip/cac1279bae7efb5c7fb2ca4c3ba4b8eb741a96c1
    53/134:	https://codeload.github.com/grasmash/yaml-expander/legacy.zip/3f0f6001ae707a24f4d9733958d77d92bf9693b1
    54/134:	https://codeload.github.com/thephpleague/container/legacy.zip/43f35abd03a12977a60ffd7095efd6a7808488c0
    55/134:	https://codeload.github.com/container-interop/container-interop/legacy.zip/79cbf1341c22ec75643d841642dd5d6acd83bdb8
    56/134:	https://codeload.github.com/consolidation/site-process/legacy.zip/ad86475eb3fe73490eb1b6ff2e74ee0f09952e9d
    57/134:	https://codeload.github.com/dnoegel/php-xdg-base-dir/legacy.zip/8f8a6e48c5ecb0f991c2fdcf5f154a47d85f9ffd
    58/134:	https://codeload.github.com/consolidation/Robo/legacy.zip/a0415a2663f6d9426d3cb9013446d3f00225d76d
    59/134:	https://codeload.github.com/nikic/PHP-Parser/legacy.zip/c346bbfafe2ff60680258b631afb730d186ed864
    60/134:	https://codeload.github.com/webflo/drupal-finder/legacy.zip/123e248e14ee8dd3fbe89fb5a733a6cf91f5820e
    61/134:	https://codeload.github.com/consolidation/site-alias/legacy.zip/fd40a03f80f8fd4684b10bef8c8c4ec5a9a9bf26
    62/134:	https://codeload.github.com/webmozart/assert/legacy.zip/bafc69caeb4d49c39fd0779086c03a3738cbb389
    63/134:	https://codeload.github.com/webmozart/path-util/legacy.zip/d939f7edc24c9a1bb9c0dee5cb05d8e859490725
    64/134:	https://codeload.github.com/composer/ca-bundle/legacy.zip/95c63ab2117a72f48f5a55da9740a3273d45b7fd
    65/134:	https://codeload.github.com/asm89/stack-cors/legacy.zip/b9c31def6a83f84b4d4a40d35996d375755f0e08
    66/134:	https://codeload.github.com/zaporylie/composer-drupal-optimizations/legacy.zip/fb231d92adc862a2c9276bccbc90f684816dc75d
    67/134:	https://codeload.github.com/composer/semver/legacy.zip/c6bea70230ef4dd483e6bbcab6005f682ed3a8de
    68/134:	https://codeload.github.com/doctrine/reflection/legacy.zip/55e71912dfcd824b2fdd16f2d9afe15684cfce79
    69/134:	https://codeload.github.com/egulias/EmailValidator/legacy.zip/ade6887fd9bd74177769645ab5c474824f8a418a
    70/134:	https://codeload.github.com/doctrine/lexer/legacy.zip/e864bbf5904cb8f5bb334f99209b48018522f042
    71/134:	https://codeload.github.com/drupal/core-recommended/legacy.zip/c39d02c45dbc26088a2ff004b52fd3aedf2620fe
    72/134:	https://codeload.github.com/drush-ops/drush/legacy.zip/aad2b17ad34801d9b55cff903e3e7db65d754b80
    73/134:	https://codeload.github.com/bobthecow/psysh/legacy.zip/a8aec1b2981ab66882a01cce36a49b6317dc3560
    74/134:	https://codeload.github.com/guzzle/promises/legacy.zip/a59da6cf61d80060647ff4d3eb2c03a2bc694646
    75/134:	https://codeload.github.com/guzzle/psr7/legacy.zip/239400de7a173fe9901b9ac7c06497751f00727a
    76/134:	https://codeload.github.com/doctrine/annotations/legacy.zip/5db60a4969eba0e0c197a19c077780aadbc43c5d
    77/134:	https://codeload.github.com/guzzle/guzzle/legacy.zip/a4a1b6930528a8f7ee03518e6442ec7a44155d9d
    78/134:	https://codeload.github.com/laminas/laminas-zendframework-bridge/legacy.zip/fcd87520e4943d968557803919523772475e8ea3
    79/134:	https://codeload.github.com/laminas/laminas-escaper/legacy.zip/25f2a053eadfa92ddacb609dcbbc39362610da70
    80/134:	https://codeload.github.com/laminas/laminas-diactoros/legacy.zip/5ab185dba63ec655a2380c97711b09adc7061f89
    81/134:	https://codeload.github.com/laminas/laminas-stdlib/legacy.zip/2b18347625a2f06a1a485acfbc870f699dbe51c6
    82/134:	https://codeload.github.com/laminas/laminas-feed/legacy.zip/8a193ac96ebcb3e16b6ee754ac2a889eefacb654
    83/134:	https://codeload.github.com/pear/PEAR_Exception/legacy.zip/dbb42a5a0e45f3adcf99babfb2a1ba77b8ac36a7
    84/134:	https://codeload.github.com/pear/pear-core-minimal/legacy.zip/625a3c429d9b2c1546438679074cac1b089116a7
    85/134:	https://ftp.drupal.org/files/projects/gatsby-8.x-1.0-rc1.zip
    86/134:	https://codeload.github.com/pear/Console_Getopt/legacy.zip/a41f8d3e668987609178c7c4a9fe48fecac53fa0
    87/134:	https://codeload.github.com/ralouphie/getallheaders/legacy.zip/120b605dfeb996808c31b6477290a714d356e822
    88/134:	https://codeload.github.com/stackphp/builder/legacy.zip/a4faaa6f532c6086bc66c29e1bc6c29593e1ca7c
    89/134:	https://codeload.github.com/pear/Archive_Tar/legacy.zip/c5b00053770e1d72128252c62c2c1a12c26639f0
    90/134:	https://codeload.github.com/symfony/debug/legacy.zip/28f92d08bb6d1fddf8158e02c194ad43870007e6
    91/134:	https://codeload.github.com/php-fig/http-factory/legacy.zip/12ac7fcd07e5b077433f5f2bee95b3a771bf61be
    92/134:	https://codeload.github.com/Masterminds/html5-php/legacy.zip/104443ad663d15981225f99532ba73c2f1d6b6f2
    93/134:	https://codeload.github.com/php-fig/http-message/legacy.zip/f6561bf28d520154e4b0ec72be95418abe6d9363
    94/134:	https://codeload.github.com/symfony/process/legacy.zip/c714958428a85c86ab97e3a0c96db4c4f381b7f5
    95/134:	https://codeload.github.com/symfony-cmf/Routing/legacy.zip/e073c3b6db0e9a5f4c8d7a7bb8a092cd5e191fba
    96/134:	https://codeload.github.com/symfony/error-handler/legacy.zip/0df9a23c0f9eddbb6682479fee6fd58b88add75b
    97/134:	https://codeload.github.com/symfony/psr-http-message-bridge/legacy.zip/ce709cd9c90872c08c2427b45739d5f3c781ab4f
    98/134:	https://codeload.github.com/symfony/polyfill-php72/legacy.zip/f048e612a3905f34931127360bdd2def19a5e582
    99/134:	https://codeload.github.com/symfony/http-foundation/legacy.zip/3adfbd7098c850b02d107330b7b9deacf2581578
    100/134:	https://codeload.github.com/symfony/polyfill-iconv/legacy.zip/c4de7601eefbf25f9d47190abe07f79fe0a27424
    101/134:	https://codeload.github.com/symfony/mime/legacy.zip/56261f89385f9d13cf843a5101ac72131190bc91
    102/134:	https://codeload.github.com/symfony/dependency-injection/legacy.zip/6a2cecd7011aec38b5fb2270abf0de120e7679b1
    103/134:	https://codeload.github.com/symfony/routing/legacy.zip/0f557911dde75c2a9652b8097bd7c9f54507f646
    104/134:	https://codeload.github.com/symfony/translation-contracts/legacy.zip/e5ca07c8f817f865f618aa072c2fe8e0e637340e
    105/134:	https://codeload.github.com/symfony/http-kernel/legacy.zip/54526b598d7fc86a67850488b194a88a79ab8467
    106/134:	https://codeload.github.com/symfony/translation/legacy.zip/79d3ef9096a6a6047dbc69218b68c7b7f63193af
    107/134:	https://codeload.github.com/symfony/yaml/legacy.zip/c2d2cc66e892322cfcc03f8f12f8340dbd7a3f8a
    108/134:	https://codeload.github.com/TYPO3/phar-stream-wrapper/legacy.zip/e0c1b495cfac064f4f5c4bcb6bf67bb7f345ed04
    109/134:	https://codeload.github.com/symfony/polyfill-intl-idn/legacy.zip/3bff59ea7047e925be6b7f2059d60af31bb46d6a
    110/134:	https://codeload.github.com/consolidation/self-update/legacy.zip/dba6b2c0708f20fa3ba8008a2353b637578849b4
    111/134:	https://codeload.github.com/cweagans/composer-patches/legacy.zip/2e6f72a2ad8d59cd7e2b729f218bf42adb14f590
    112/134:	https://codeload.github.com/symfony/serializer/legacy.zip/f2d82706d488b87e67050b03a9ae54194b129024
    113/134:	https://codeload.github.com/symfony/polyfill-ctype/legacy.zip/e94c8b1bbe2bc77507a1056cdb06451c75b427f9
    114/134:	https://codeload.github.com/symfony/var-dumper/legacy.zip/46a942903059b0b05e601f00eb64179e05578c0f
    115/134:	https://codeload.github.com/drupal/core-composer-scaffold/legacy.zip/fb112a238577589311395099324ddec7fb4176d7
    116/134:	https://codeload.github.com/dflydev/dflydev-dot-access-data/legacy.zip/3fbd874921ab2c041e899d044585a2ab9795df8a
    117/134:	https://codeload.github.com/php-fig/log/legacy.zip/0f73288fd15629204f9d42b7055f72dacbe811fc
    118/134:	https://codeload.github.com/symfony/filesystem/legacy.zip/b27f491309db5757816db672b256ea2e03677d30
    119/134:	https://codeload.github.com/consolidation/log/legacy.zip/ba0bf6af1fbd09ed4dc18fc2f27b12ceff487cbf
    120/134:	https://codeload.github.com/symfony/validator/legacy.zip/2fae3378102cff29976ce9e35f6964c78fce02b6
    121/134:	https://codeload.github.com/consolidation/output-formatters/legacy.zip/9deeddd6a916d0a756b216a8b40ce1016e17c0b9
    122/134:	https://codeload.github.com/consolidation/annotated-command/legacy.zip/efc58dc0f34a45539787c5190b41b5d2a50a08da
    123/134:	https://codeload.github.com/php-fig/container/legacy.zip/b7ce3b176482dbbc1245ebf52b181af44c2cf55f
    124/134:	https://codeload.github.com/symfony/event-dispatcher/legacy.zip/a5370aaa7807c7a439b21386661ffccf3dff2866
    125/134:	https://codeload.github.com/symfony/event-dispatcher-contracts/legacy.zip/c43ab685673fb6c8d84220c77897b1d6cdbe1d18
    126/134:	https://codeload.github.com/twigphp/Twig/legacy.zip/18772e0190734944277ee97a02a9a6c6555fcd94
    127/134:	https://codeload.github.com/symfony/polyfill-php80/legacy.zip/5e30b2799bc1ad68f7feb62b60a73743589438dd
    128/134:	https://codeload.github.com/symfony/console/legacy.zip/326b064d804043005526f5a0494cfb49edb59bb0
    129/134:	https://codeload.github.com/symfony/polyfill-mbstring/legacy.zip/fa79b11539418b02fc5e1897267673ba2c19419c
    130/134:	https://codeload.github.com/symfony/finder/legacy.zip/5729f943f9854c5781984ed4907bbb817735776b
    131/134:	https://codeload.github.com/composer/installers/legacy.zip/b93bcf0fa1fccb0b7d176b0967d969691cd74cca
    132/134:	https://codeload.github.com/symfony/service-contracts/legacy.zip/66a8f0957a3ca54e4f724e49028ab19d75a8918b
    133/134:	https://codeload.github.com/symfony/polyfill-php73/legacy.zip/a760d8964ff79ab9bf057613a5808284ec852ccc
    134/134:	https://codeload.github.com/drupal/core/legacy.zip/ea6e0cef3240dc8e48f797698226467de121e9c9
    Finished: success: 134, skipped: 0, failure: 0, total: 134
Package operations: 135 installs, 0 updates, 0 removals
  - Installing composer/installers (v1.9.0): Loading from cache
  - Installing cweagans/composer-patches (1.6.7): Loading from cache
  - Installing drupal/core-composer-scaffold (9.0.2): Loading from cache
  - Installing zaporylie/composer-drupal-optimizations (1.1.1): Loading from cache
  - Installing symfony/finder (v4.4.10): Loading from cache
  - Installing symfony/event-dispatcher-contracts (v1.1.7): Loading from cache
  - Installing symfony/event-dispatcher (v4.4.9): Loading from cache
  - Installing psr/container (1.0.0): Loading from cache
  - Installing symfony/service-contracts (v2.1.2): Loading from cache
  - Installing symfony/polyfill-php80 (v1.17.0): Loading from cache
  - Installing symfony/polyfill-php73 (v1.17.0): Loading from cache
  - Installing symfony/polyfill-mbstring (v1.17.0): Loading from cache
  - Installing symfony/console (v4.4.9): Loading from cache
  - Installing psr/log (1.1.3): Loading from cache
  - Installing dflydev/dot-access-data (v1.1.0): Loading from cache
  - Installing consolidation/output-formatters (4.1.1): Loading from cache
  - Installing consolidation/annotated-command (4.1.1): Loading from cache
  - Installing consolidation/log (2.0.1): Loading from cache
  - Installing symfony/polyfill-ctype (v1.17.0): Loading from cache
  - Installing symfony/filesystem (v4.4.10): Loading from cache
  - Installing consolidation/self-update (1.2.0): Loading from cache
  - Installing typo3/phar-stream-wrapper (v3.1.4): Loading from cache
  - Installing twig/twig (v2.12.5): Loading from cache
  - Installing symfony/yaml (v4.4.9): Loading from cache
  - Installing symfony/var-dumper (v5.1.0): Loading from cache
  - Installing symfony/translation-contracts (v2.1.2): Loading from cache
  - Installing symfony/validator (v4.4.9): Loading from cache
  - Installing symfony/translation (v4.4.9): Loading from cache
  - Installing symfony/serializer (v4.4.9): Loading from cache
  - Installing symfony/routing (v4.4.9): Loading from cache
  - Installing symfony/polyfill-php72 (v1.17.0): Loading from cache
  - Installing symfony/polyfill-intl-idn (v1.17.0): Loading from cache
  - Installing symfony/mime (v5.1.0): Loading from cache
  - Installing symfony/http-foundation (v4.4.9): Loading from cache
  - Installing psr/http-message (1.0.1): Loading from cache
  - Installing symfony/psr-http-message-bridge (v2.0.0): Loading from cache
  - Installing symfony/process (v4.4.9): Loading from cache
  - Installing symfony/polyfill-iconv (v1.17.0): Loading from cache
  - Installing symfony/debug (v4.4.9): Loading from cache
  - Installing symfony/error-handler (v4.4.9): Loading from cache
  - Installing symfony/http-kernel (v4.4.9): Loading from cache
  - Installing symfony/dependency-injection (v4.4.9): Loading from cache
  - Installing symfony-cmf/routing (2.3.2): Loading from cache
  - Installing stack/builder (v1.0.6): Loading from cache
  - Installing ralouphie/getallheaders (3.0.3): Loading from cache
  - Installing psr/http-factory (1.0.1): Loading from cache
  - Installing pear/pear_exception (v1.0.1): Loading from cache
  - Installing pear/console_getopt (v1.4.3): Loading from cache
  - Installing pear/pear-core-minimal (v1.10.10): Loading from cache
  - Installing pear/archive_tar (1.4.9): Loading from cache
  - Installing masterminds/html5 (2.7.0): Loading from cache
  - Installing laminas/laminas-zendframework-bridge (1.0.4): Loading from cache
  - Installing laminas/laminas-stdlib (3.2.1): Loading from cache
  - Installing laminas/laminas-escaper (2.6.1): Loading from cache
  - Installing laminas/laminas-feed (2.12.2): Loading from cache
  - Installing laminas/laminas-diactoros (2.3.0): Loading from cache
  - Installing guzzlehttp/psr7 (1.6.1): Loading from cache
  - Installing guzzlehttp/promises (v1.3.1): Loading from cache
  - Installing guzzlehttp/guzzle (6.5.4): Loading from cache
  - Installing doctrine/lexer (1.2.1): Loading from cache
  - Installing egulias/email-validator (2.1.17): Loading from cache
  - Installing doctrine/annotations (1.10.3): Loading from cache
  - Installing doctrine/reflection (1.2.1): Loading from cache
  - Installing composer/semver (1.5.1): Loading from cache
  - Installing asm89/stack-cors (1.3.0): Loading from cache
  - Installing drupal/core (9.0.2): Loading from cache
  - Installing drupal/core-recommended (9.0.2)
  - Installing drupal/gatsby (1.0.0-rc1): Loading from cache
  - Installing webmozart/assert (1.9.1): Loading from cache
  - Installing webmozart/path-util (2.3.0): Loading from cache
  - Installing webflo/drupal-finder (1.2.0): Loading from cache
  - Installing nikic/php-parser (v4.6.0): Loading from cache
  - Installing dnoegel/php-xdg-base-dir (v0.1.1): Loading from cache
  - Installing psy/psysh (v0.10.4): Loading from cache
  - Installing container-interop/container-interop (1.2.0): Loading from cache
  - Installing league/container (2.4.1): Loading from cache
  - Installing grasmash/yaml-expander (1.4.0): Loading from cache
  - Installing grasmash/expander (1.0.0): Loading from cache
  - Installing consolidation/config (1.2.1): Loading from cache
  - Installing consolidation/site-alias (3.0.1): Loading from cache
  - Installing consolidation/site-process (4.0.0): Loading from cache
  - Installing consolidation/robo (2.1.0): Loading from cache
  - Installing consolidation/filter-via-dot-access-data (1.0.0): Loading from cache
  - Installing chi-teck/drupal-code-generator (1.32.1): Loading from cache
  - Installing drush/drush (10.3.1): Loading from cache
  - Installing symfony/dom-crawler (v4.4.10): Loading from cache
  - Installing symfony/browser-kit (v4.4.10): Loading from cache
  - Installing symfony/css-selector (v4.4.10): Loading from cache
  - Installing behat/mink (v1.8.1): Loading from cache
  - Installing behat/mink-browserkit-driver (v1.3.4): Loading from cache
  - Installing composer/ca-bundle (1.2.7): Loading from cache
  - Installing composer/spdx-licenses (1.5.4): Loading from cache
  - Installing composer/xdebug-handler (1.4.2): Loading from cache
  - Installing symfony/phpunit-bridge (v4.4.10): Loading from cache
  - Installing symfony/lock (v4.4.10): Loading from cache
  - Installing sebastian/version (2.0.1): Loading from cache
  - Installing sebastian/type (1.1.3): Loading from cache
  - Installing sebastian/resource-operations (2.0.1): Loading from cache
  - Installing sebastian/recursion-context (3.0.0): Loading from cache
  - Installing sebastian/object-reflector (1.1.1): Loading from cache
  - Installing sebastian/object-enumerator (3.0.3): Loading from cache
  - Installing sebastian/global-state (3.0.0): Loading from cache
  - Installing sebastian/exporter (3.1.2): Loading from cache
  - Installing sebastian/environment (4.2.3): Loading from cache
  - Installing sebastian/diff (3.0.2): Loading from cache
  - Installing sebastian/comparator (3.0.2): Loading from cache
  - Installing phpunit/php-timer (2.1.2): Loading from cache
  - Installing phpunit/php-text-template (1.2.1): Loading from cache
  - Installing phpunit/php-file-iterator (2.0.2): Loading from cache
  - Installing theseer/tokenizer (1.2.0): Loading from cache
  - Installing sebastian/code-unit-reverse-lookup (1.0.1): Loading from cache
  - Installing phpunit/php-token-stream (3.1.1): Loading from cache
  - Installing phpunit/php-code-coverage (7.0.10): Loading from cache
  - Installing phpdocumentor/reflection-common (2.2.0): Loading from cache
  - Installing phpdocumentor/type-resolver (1.3.0): Loading from cache
  - Installing phpdocumentor/reflection-docblock (5.1.0): Loading from cache
  - Installing doctrine/instantiator (1.3.1): Loading from cache
  - Installing phpspec/prophecy (1.11.1): Loading from cache
  - Installing phar-io/version (2.0.1): Loading from cache
  - Installing phar-io/manifest (1.0.3): Loading from cache
  - Installing myclabs/deep-copy (1.10.1): Loading from cache
  - Installing phpunit/phpunit (8.5.8): Loading from cache
  - Installing mikey179/vfsstream (v1.6.8): Loading from cache
  - Installing justinrainbow/json-schema (5.2.10): Loading from cache
  - Installing easyrdf/easyrdf (0.9.1): Loading from cache
  - Installing squizlabs/php_codesniffer (3.5.5): Loading from cache
  - Installing drupal/coder (8.3.9): Cloning d51e0b8c65 from cache
  - Installing seld/phar-utils (1.1.1): Loading from cache
  - Installing seld/jsonlint (1.8.0): Loading from cache
  - Installing composer/composer (1.10.9): Loading from cache
  - Installing instaclick/php-webdriver (1.4.7): Loading from cache
  - Installing behat/mink-selenium2-driver (v1.4.0): Loading from cache
  - Installing fabpot/goutte (v3.3.0): Loading from cache
  - Installing behat/mink-goutte-driver (v1.2.1): Loading from cache
  - Installing drupal/core-dev (9.0.2)
symfony/event-dispatcher-contracts suggests installing psr/event-dispatcher
symfony/validator suggests installing doctrine/cache (For using the default cached annotation reader.)
symfony/validator suggests installing psr/cache-implementation (For using the mapping cache.)
symfony/validator suggests installing symfony/config
symfony/validator suggests installing symfony/expression-language (For using the Expression validator)
symfony/validator suggests installing symfony/intl
symfony/validator suggests installing symfony/property-access (For accessing properties within comparison constraints)
symfony/validator suggests installing symfony/property-info (To automatically add NotNull and Type constraints)
symfony/translation suggests installing symfony/config
symfony/serializer suggests installing doctrine/cache (For using the default cached annotation reader and metadata cache.)
symfony/serializer suggests installing psr/cache-implementation (For using the metadata cache.)
symfony/serializer suggests installing symfony/config (For using the XML mapping loader.)
symfony/serializer suggests installing symfony/property-access (For using the ObjectNormalizer.)
symfony/serializer suggests installing symfony/property-info (To deserialize relations.)
symfony/routing suggests installing symfony/config (For using the all-in-one router or any loader)
symfony/routing suggests installing symfony/expression-language (For using expression matching)
symfony/psr-http-message-bridge suggests installing nyholm/psr7 (For a super lightweight PSR-7/17 implementation)
symfony/http-kernel suggests installing symfony/config
symfony/dependency-injection suggests installing symfony/config
symfony/dependency-injection suggests installing symfony/expression-language (For using expressions in service container configuration)
symfony/dependency-injection suggests installing symfony/proxy-manager-bridge (Generate service proxies to lazy load them)
pear/archive_tar suggests installing ext-xz (Lzma2 compression support.)
laminas/laminas-feed suggests installing laminas/laminas-cache (Laminas\Cache component, for optionally caching feeds between requests)
laminas/laminas-feed suggests installing laminas/laminas-db (Laminas\Db component, for use with PubSubHubbub)
laminas/laminas-feed suggests installing laminas/laminas-http (Laminas\Http for PubSubHubbub, and optionally for use with Laminas\Feed\Reader)
laminas/laminas-feed suggests installing laminas/laminas-servicemanager (Laminas\ServiceManager component, for easily extending ExtensionManager implementations)
laminas/laminas-feed suggests installing laminas/laminas-validator (Laminas\Validator component, for validating email addresses used in Atom feeds and entries when using the Writer subcomponent)
guzzlehttp/psr7 suggests installing zendframework/zend-httphandlerrunner (Emit PSR-7 responses)
psy/psysh suggests installing ext-pdo-sqlite (The doc command requires SQLite to work.)
psy/psysh suggests installing hoa/console (A pure PHP readline implementation. You'll want this if your PHP install doesn't already support readline or libedit.)
consolidation/robo suggests installing henrikbjorn/lurker (For monitoring filesystem changes in taskWatch)
consolidation/robo suggests installing natxet/cssmin (For minifying CSS files in taskMinify)
consolidation/robo suggests installing patchwork/jsqueeze (For minifying JS files in taskMinify)
behat/mink suggests installing behat/mink-zombie-driver (fast and JS-enabled headless driver for any app (requires node.js))
behat/mink suggests installing dmore/chrome-mink-driver (fast and JS-enabled driver for any app (requires chromium or google chrome))
sebastian/global-state suggests installing ext-uopz (*)
phpunit/php-code-coverage suggests installing ext-xdebug (^2.7.2)
phpunit/phpunit suggests installing ext-xdebug (*)
phpunit/phpunit suggests installing phpunit/php-invoker (^2.0.0)
easyrdf/easyrdf suggests installing ml/json-ld (~1.0)
Package container-interop/container-interop is abandoned, you should avoid using it. Use psr/container instead.
Generating autoload files
45 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
Scaffolding files for drupal/core:
  - Copy [web-root]/example.gitignore from assets/scaffold/files/example.gitignore
  - Copy [web-root]/INSTALL.txt from assets/scaffold/files/drupal.INSTALL.txt
  - Copy [web-root]/README.txt from assets/scaffold/files/drupal.README.txt
  - Copy [web-root]/sites/README.txt from assets/scaffold/files/sites.README.txt
  - Skip [web-root]/sites/default/default.settings.php: overridden in benjifisher/lando-gatsby-drupal
  - Copy [web-root]/modules/README.txt from assets/scaffold/files/modules.README.txt
  - Copy [web-root]/profiles/README.txt from assets/scaffold/files/profiles.README.txt
  - Copy [web-root]/themes/README.txt from assets/scaffold/files/themes.README.txt
npm WARN deprecated @hapi/joi@15.1.1: joi is leaving the @hapi organization and moving back to 'joi' (https://github.com/sideway/joi/issues/2411)
npm WARN deprecated @hapi/address@2.1.4: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
/var/www/.npm-global/bin/gatsby -> /var/www/.npm-global/lib/node_modules/gatsby-cli/cli.js

> core-js@2.6.11 postinstall /var/www/.npm-global/lib/node_modules/gatsby-cli/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> gatsby-telemetry@1.3.22 postinstall /var/www/.npm-global/lib/node_modules/gatsby-cli/node_modules/gatsby-telemetry
> node src/postinstall.js || true


> gatsby-cli@2.12.62 postinstall /var/www/.npm-global/lib/node_modules/gatsby-cli
> node scripts/postinstall.js

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║   Gatsby collects anonymous usage analytics                            ║
║   to help improve Gatsby for all users.                                ║
║                                                                        ║
║   If you'd like to opt-out, you can use `gatsby telemetry --disable`   ║
║   To learn more, checkout https://gatsby.dev/telemetry                 ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
Success!

Welcome to the Gatsby CLI! Please visit https://www.gatsbyjs.org/docs/gatsby-cli/ for more information.

npm WARN acorn-dynamic-import@4.0.0 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.

+ gatsby-cli@2.12.62
added 682 packages from 477 contributors in 31.815s
/var/www/.npm-global/bin/yarn -> /var/www/.npm-global/lib/node_modules/yarn/bin/yarn.js
/var/www/.npm-global/bin/yarnpkg -> /var/www/.npm-global/lib/node_modules/yarn/bin/yarn.js
+ yarn@1.22.4
added 1 package in 0.578s
Killing landogatsbydrupal_appserver_nginx_1 ... done
Killing landogatsbydrupal_appserver_1       ... done
Killing landogatsbydrupal_nodejs_1          ... done
Starting landogatsbydrupal_appserver_1       ... done
Starting landogatsbydrupal_nodejs_1          ... done
Creating landogatsbydrupal_database_1        ... done
Starting landogatsbydrupal_appserver_nginx_1 ... done
Waiting until database service is ready...
Scanning to determine which services are ready... Please standby...
Install Drupal with drush.

 You are about to:
 * Create a sites/default/settings.php file
 * DROP all tables in your 'drupal8' database.

 // Do you want to continue?: yes.

 [notice] Starting Drupal installation. This takes a while.
 [notice] Performed install task: install_select_language
 [notice] Performed install task: install_select_profile
 [notice] Performed install task: install_load_profile
 [notice] Performed install task: install_verify_requirements
 [notice] Performed install task: install_settings_form
 [notice] Performed install task: install_verify_database_ready
 [notice] Performed install task: install_base_system
 [notice] Performed install task: install_bootstrap_full
 [notice] Performed install task: install_profile_modules
 [notice] Performed install task: install_profile_themes
 [warning] The "extra_field_block:node:recipe:content_moderation_control" was not found
 [warning] The "extra_field_block:node:recipe:content_moderation_control" was not found
 [notice] Performed install task: install_install_profile
 [error]  Import of string "Aún no se ha creado ningún contenido de página de inicio. <br/>Siga la<a target="_blank" href="https://www.drupal.org/es/docs/user_guide/es/index.html">Guía del usuario</a> para comenzar a construir su sitio." was skipped because of disallowed or malformed HTML.
 [notice] Translations imported: 9000 added, 0 updated, 0 removed.
 [warning] 1 disallowed HTML string(s) in files: translations://drupal-9.0.2.es.po.
 [notice] Performed install task: install_import_translations
 [notice] Performed install task: install_configure_form
 [notice] Performed install task: install_finish_translations
 [notice] Cron run completed.
 [notice] Performed install task: install_finished
 [success] Installation complete.
The following module(s) will be enabled: jsonapi, gatsby, serialization

 // Do you want to continue?: yes.

>  [notice] Checked es translation for gatsby.
>  [notice] Downloaded es translation for gatsby.
>  [notice] Imported es translation for gatsby.
>  [notice] Translations imported: 0 added, 1 updated, 0 removed.
>  [notice] Message: One translation file imported. /0/ translations were added, /1/ translations
> were updated and /0/ translations were removed.
>
 [success] Successfully enabled: jsonapi, gatsby, serialization
 [success] Successfully uninstalled: contact
+------------+-----------------+-----------+
| Collection | Config          | Operation |
+------------+-----------------+-----------+
|            | gatsby.settings | Create    |
+------------+-----------------+-----------+

 // Import the listed configuration changes?: yes.

 [notice] Synchronized configuration: create gatsby.settings.
 [notice] Finalizing configuration synchronization.
 [success] The configuration was imported successfully.
Installing Gatsby with yarn.
yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
warning url-loader@1.1.2: Invalid bin field for "url-loader".
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "gatsby > @pmmmwh/react-refresh-webpack-plugin@0.3.3" has incorrect peer dependency "react-refresh@^0.8.2".
warning "gatsby > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] Building fresh packages...
Done in 32.63s.
Building the Gatsby site from Drupal.
success open and validate gatsby-configs - 0.030s
success load plugins - 0.502s
success onPreInit - 0.010s
success delete html and css files from previous builds - 0.013s
success initialize cache - 0.006s
success copy gatsby files - 0.035s
success onPreBootstrap - 0.008s
success createSchemaCustomization - 0.009s
info Starting to fetch all data from Drupal
success Fetch all data from Drupal - 2.300s
info Downloading remote files from Drupal
success Remote file download - 0.105s
success Downloading remote files - 0.158s - 20/20 126.91/s
success source and transform nodes - 2.586s
success building schema - 0.556s
success createPages - 0.037s
success createPagesStatefully - 0.046s
success updating schema - 0.020s
success onPreExtractQueries - 0.001s
success extract queries from components - 0.290s
success write out redirect data - 0.002s
success Build manifest and related icons - 0.110s
success onPostBootstrap - 0.118s
info bootstrap finished - 7.144s
success run static queries - 0.146s - 3/3 20.49/s
success run page queries - 0.053s - 13/13 244.83/s
success write out requires - 0.016s
success Building production JavaScript and CSS bundles - 7.046s
success Rewriting compilation hashes - 0.005s
success Building static HTML for pages - 1.670s - 13/13 7.79/s
success Generating image thumbnails - 9.221s - 6/6 0.65/s
success onPostBuild - 0.005s
info Done building in 16.4 sec

   ___                      __        __        __     __        ______
  / _ )___  ___  __ _  ___ / /  ___ _/ /_____ _/ /__ _/ /_____ _/ / / /
 / _  / _ \/ _ \/  ' \(_-</ _ \/ _ `/  '_/ _ `/ / _ `/  '_/ _ `/_/_/_/
/____/\___/\___/_/_/_/___/_//_/\_,_/_/\_\\_,_/_/\_,_/_/\_\\_,_(_|_|_)


Your app has started up correctly.
Here are some vitals:

 NAME                  lando-gatsby-drupal
 LOCATION              /home/benji/Sites/lando-gatsby-drupal
 SERVICES              appserver_nginx, appserver, database, nodejs
 APPSERVER_NGINX URLS  https://localhost:33264
                       http://localhost:33265
                       http://drupal.lgd.lndo.site/
                       https://drupal.lgd.lndo.site/
                       http://gatsbydrupal.lgd.lndo.site/
                       https://gatsbydrupal.lgd.lndo.site/
 NODEJS URLS           https://localhost:32924
                       http://gatsby.lgd.lndo.site/
                       https://gatsby.lgd.lndo.site/
```

Once Lando has started, you should get something like this when you ask for
more info:

```
$ lando info
[ { service: 'appserver_nginx',
    urls:
     [ 'https://localhost:33264',
       'http://localhost:33265',
       'http://drupal.lgd.lndo.site/',
       'https://drupal.lgd.lndo.site/',
       'http://gatsbydrupal.lgd.lndo.site/',
       'https://gatsbydrupal.lgd.lndo.site/' ],
    type: 'nginx',
    healthy: true,
    managed: true,
    webroot: 'drupal/web',
    config:
     { vhosts: '/home/benji/.lando/config/drupal8/default.conf.tpl',
       php: '/home/benji/.lando/config/drupal8/php.ini' },
    version: '1.17',
    meUser: 'www-data',
    hasCerts: true,
    hostnames: [ 'appserver_nginx.landogatsbydrupal.internal' ] },
  { service: 'appserver',
    urls: [],
    type: 'php',
    healthy: true,
    via: 'nginx',
    served_by: 'appserver_nginx',
    webroot: 'drupal/web',
    config:
     { php: '/home/benji/.lando/config/drupal8/php.ini',
       vhosts: '/home/benji/.lando/config/drupal8/default.conf.tpl' },
    version: '7.4',
    meUser: 'www-data',
    hasCerts: false,
    hostnames: [ 'appserver.landogatsbydrupal.internal' ] },
  { service: 'database',
    urls: [],
    type: 'mariadb',
    healthy: true,
    internal_connection: { host: 'database', port: '3306' },
    external_connection: { host: '127.0.0.1', port: '33266' },
    healthcheck: 'mysql -uroot --silent --execute "SHOW DATABASES;"',
    creds: { database: 'drupal8', password: 'drupal8', user: 'drupal8' },
    config: { database: '/home/benji/.lando/config/drupal8/mysql.cnf' },
    version: '10.3',
    meUser: 'www-data',
    hasCerts: false,
    hostnames: [ 'database.landogatsbydrupal.internal' ] },
  { service: 'nodejs',
    urls:
     [ 'https://localhost:32924',
       'http://gatsby.lgd.lndo.site/',
       'https://gatsby.lgd.lndo.site/' ],
    type: 'node',
    healthy: true,
    config: {},
    version: '10',
    meUser: 'node',
    hasCerts: true,
    hostnames: [ 'nodejs.landogatsbydrupal.internal' ] } ]
```
