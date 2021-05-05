package org.lamisplus.modules.base.extensions;

import com.foreach.across.core.annotations.ModuleConfiguration;
import com.foreach.across.modules.hibernate.provider.HibernatePackageConfigurer;
import com.foreach.across.modules.hibernate.provider.HibernatePackageRegistry;
import org.lamisplus.modules.base.domain.BaseDomain;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@ModuleConfiguration({"AcrossHibernateJpaModule"})
public class EntityScanConfiguration implements HibernatePackageConfigurer {
    private static final Logger log = LoggerFactory.getLogger(EntityScanConfiguration.class);

    public EntityScanConfiguration() {
    }

    public void configureHibernatePackage(HibernatePackageRegistry hibernatePackageRegistry) {
        hibernatePackageRegistry.addPackageToScan(BaseDomain.class);
    }
}
